export interface CalendarEvent {
  title: string
  startIST: string   // e.g. "20260913T101500" local IST
  endIST: string     // e.g. "20260913T120000"
  location: string
  description: string
}

function istToUtc(ist: string): string {
  // IST is UTC+5:30, subtract 5h30m
  const y = ist.slice(0, 4), mo = ist.slice(4, 6), d = ist.slice(6, 8)
  const h = parseInt(ist.slice(9, 11)), m = parseInt(ist.slice(11, 13))
  const date = new Date(Date.UTC(+y, +mo - 1, +d, h - 5, m - 30))
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

export function googleCalendarUrl(event: CalendarEvent): string {
  const start = istToUtc(event.startIST)
  const end = istToUtc(event.endIST)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${start}/${end}`,
    location: event.location,
    details: event.description,
    ctz: 'Asia/Kolkata',
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

export function outlookCalendarUrl(event: CalendarEvent): string {
  const start = istToUtc(event.startIST)
  const end = istToUtc(event.endIST)
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: event.title,
    startdt: start,
    enddt: end,
    location: event.location,
    body: event.description,
  })
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params}`
}

export function downloadICS(event: CalendarEvent): void {
  const start = istToUtc(event.startIST)
  const end = istToUtc(event.endIST)
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Arjun & Arshitha Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `DTSTAMP:${now}`,
    `SUMMARY:${event.title}`,
    `LOCATION:${event.location}`,
    `DESCRIPTION:${event.description}`,
    `UID:${now}-wedding@arjun-arshitha.love`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${event.title.replace(/\s+/g, '-')}.ics`
  a.click()
  URL.revokeObjectURL(url)
}

export const weddingEveEvent: CalendarEvent = {
  title: 'Arjun & Arshitha — Wedding Eve Celebration',
  startIST: '20260912T160000',
  endIST: '20260912T220000',
  location: 'Pookulayan House, Alavil-Kunnav, Kannur',
  description: 'Join us for the Wedding Eve Celebration of Arjun Ajaykumar & Arshitha Anandakrishnan.',
}

export const weddingCeremonyEvent: CalendarEvent = {
  title: 'Arjun & Arshitha — Sacred Union & Muhurtham',
  startIST: '20260913T101500',
  endIST: '20260913T130000',
  location: 'Wasava Cliff House, Burnacherry (Near Baby Beach), Kannur',
  description: 'Join us for the sacred wedding ceremony and Muhurtham of Arjun Ajaykumar & Arshitha Anandakrishnan.',
}
