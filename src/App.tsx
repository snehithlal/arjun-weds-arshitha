import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Envelope from './components/Envelope'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import CoupleSection from './components/CoupleSection'
import EventCard from './components/EventCard'
import Gallery from './components/Gallery'
import Rsvp from './components/Rsvp'
import Footer from './components/Footer'
import BotanicalDivider from './components/BotanicalDivider'
import AmbientScene from './components/AmbientScene'
import CursorTrail from './components/CursorTrail'
import TopNav from './components/TopNav'
import { ScrollProgressTrack, ScrollIndicator, MapFAB } from './components/ScrollProgress'
import { weddingCeremonyEvent, weddingEveEvent } from './lib/calendar'
import { primaryEvent } from './lib/invite'

const SEEN_KEY = 'arjun-arshitha-envelope-seen'

export default function App() {
  const [opened, setOpened] = useState(() => {
    try {
      return sessionStorage.getItem(SEEN_KEY) === '1'
    } catch {
      return false
    }
  })
  const [flourish, setFlourish] = useState(false)

  const handleOpen = () => {
    try {
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      // storage disabled
    }
    setOpened(true)
    setFlourish(true)
    setTimeout(() => setFlourish(false), 1100)
  }

  return (
    <>
      <AmbientScene active={opened} />
      <CursorTrail />

      <AnimatePresence>
        {!opened && <Envelope onOpen={handleOpen} />}
      </AnimatePresence>

      <AnimatePresence>
        {flourish && (
          <motion.div
            key="flourish"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], times: [0, 0.4, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 55,
              pointerEvents: 'none',
              background:
                'radial-gradient(circle at center, rgba(242,199,106,0.85) 0%, rgba(232,210,154,0.4) 30%, transparent 70%)',
            }}
            aria-hidden
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {opened && (
          <>
            <a href="#main" className="skip-link">Skip to content</a>
            <TopNav />
            <motion.main
              id="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative', zIndex: 2 }}
            >
              <Hero />
              <Countdown />
              <BotanicalDivider />
              <CoupleSection />

              <section id="details" aria-label="Wedding details" className="py-24 px-6">
                <motion.div
                  className="text-center mb-10"
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                >
                  <p className="section-sub mb-3">Join us for the celebrations</p>
                  <h2 className="section-heading-script gold-foil">Wedding Events</h2>
                </motion.div>

                <div className="flex flex-col gap-16 max-w-4xl mx-auto">
                  {/* Event 1: Wedding Eve Celebration */}
                  <EventCard
                    title="Wedding Eve Celebration"
                    subtitle="Pre-wedding festivities"
                    date="Saturday, 12 . 09 . 2026"
                    time="4:00 PM – 10:00 PM"
                    venue="Pookulayan House"
                    address="Alavil-Kunnav, Kannur"
                    mapUrl="https://www.google.com/maps/search/Alavil+Kunnav+Kannur"
                    calEvent={weddingEveEvent}
                  />

                  <BotanicalDivider className="my-4" />

                  {/* Event 2: Sacred Union / Ceremony */}
                  <EventCard
                    title="Sacred Union & Muhurtham"
                    subtitle="The Wedding Ceremony"
                    date="Sunday, 13 . 09 . 2026"
                    time="Muhurtham: 10:15 AM – 11:00 AM"
                    venue="Wasava Cliff House"
                    address="Burnacherry (Near Baby Beach), Kannur"
                    mapUrl="https://www.google.com/maps/search/Wasava+Cliff+House+Burnacherry+Kannur"
                    calEvent={weddingCeremonyEvent}
                  />
                </div>
              </section>

              <Gallery />
              <Rsvp />
              <Footer />

              <ScrollProgressTrack />
              <ScrollIndicator />
              <MapFAB mapUrl={primaryEvent.mapUrl} />
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
