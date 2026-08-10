export interface EventInfo {
  dateDisplay: string
  countdownUTC: string
  mapUrl: string
}

export const WEDDING_CEREMONY: EventInfo = {
  dateDisplay: '13 . 09 . 2026',
  countdownUTC: '2026-09-13T04:45:00Z', // 10:15 AM IST (04:45 UTC)
  mapUrl: 'https://www.google.com/maps/search/Wasava+Cliff+House+Burnacherry+Kannur',
}

export const WEDDING_EVE: EventInfo = {
  dateDisplay: '12 . 09 . 2026',
  countdownUTC: '2026-09-12T10:30:00Z', // 4:00 PM IST (10:30 UTC)
  mapUrl: 'https://goo.gl/maps/DMUDyGH8ZrE7GDdQ8?g_st=ac',
}

export const primaryEvent: EventInfo = WEDDING_CEREMONY
