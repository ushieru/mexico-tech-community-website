"use client"

import { useState, useMemo } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from "lucide-react"

interface CalendarEvent {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  community: string
  attendees: number
  link?: string
}

interface EventsCalendarProps {
  events: CalendarEvent[]
}

export function EventsCalendar({ events }: EventsCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1))
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const eventsForSelectedDate = useMemo(() => {
    if (!selectedDate) return []
    return events.filter((e) => e.date === selectedDate).sort((a, b) => a.time.localeCompare(b.time))
  }, [selectedDate, events])

  const eventsInMonth = useMemo(() => {
    const monthStr = currentDate.toISOString().slice(0, 7)
    return events.filter((e) => e.date.startsWith(monthStr))
  }, [events, currentDate])

  const eventsByDate = useMemo(() => {
    const map = new Map<string, number>()
    eventsInMonth.forEach((e) => {
      map.set(e.date, (map.get(e.date) || 0) + 1)
    })
    return map
  }, [eventsInMonth])

  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
    setSelectedDate(null)
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
    setSelectedDate(null)
  }

  const handleDayClick = (day: number) => {
    const dateStr = currentDate.toISOString().slice(0, 7) + `-${String(day).padStart(2, "0")}`
    setSelectedDate(dateStr)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Calendar */}
      <div className="lg:col-span-1">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">{monthName}</h3>
            <div className="flex gap-2">
              <button
                onClick={previousMonth}
                className="p-1 hover:bg-primary/10 rounded transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextMonth}
                className="p-1 hover:bg-primary/10 rounded transition-colors"
                aria-label="Next month"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-xs font-semibold text-foreground/60">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2">
            {emptyDays.map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {days.map((day) => {
              const dateStr = currentDate.toISOString().slice(0, 7) + `-${String(day).padStart(2, "0")}`
              const hasEvents = eventsByDate.has(dateStr)
              const isSelected = selectedDate === dateStr

              return (
                <button
                  key={day}
                  onClick={() => handleDayClick(day)}
                  className={`
                    aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                    transition-all relative
                    ${
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : hasEvents
                          ? "bg-primary/20 text-primary hover:bg-primary/30"
                          : "hover:bg-primary/10 text-foreground/70"
                    }
                  `}
                >
                  {day}
                  {hasEvents && !isSelected && <div className="absolute bottom-1 w-1 h-1 bg-accent rounded-full" />}
                </button>
              )
            })}
          </div>

          {/* Event count */}
          {selectedDate && eventsForSelectedDate.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border text-sm text-foreground/70">
              {eventsForSelectedDate.length} event{eventsForSelectedDate.length !== 1 ? "s" : ""} on {selectedDate}
            </div>
          )}
        </div>
      </div>

      {/* Events List */}
      <div className="lg:col-span-2">
        {selectedDate && eventsForSelectedDate.length > 0 ? (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              Events on{" "}
              {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                weekday: "long",
              })}
            </h3>
            {eventsForSelectedDate.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : selectedDate ? (
          <div className="text-center py-12 bg-card border border-border rounded-lg">
            <Calendar size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-foreground/70">No events scheduled for this date</p>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Upcoming Events in {monthName}</h3>
            {eventsInMonth.length > 0 ? (
              eventsInMonth
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map((event) => <EventCard key={event.id} event={event} />)
            ) : (
              <div className="text-center py-12 bg-card border border-border rounded-lg">
                <Calendar size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-foreground/70">No events scheduled this month</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function EventCard({ event }: { event: CalendarEvent }) {
  const eventDate = new Date(event.date)
  const monthDay = eventDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex items-center justify-center bg-primary/20 rounded-lg p-4 md:w-24 md:h-24 flex-shrink-0">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{eventDate.getDate()}</div>
            <div className="text-xs text-primary/70">{monthDay.split(" ")[0]}</div>
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-foreground/70 mb-4">{event.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-foreground/70">
              <Calendar size={16} className="text-primary" />
              <span>
                {monthDay} at {event.time}
              </span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <MapPin size={16} className="text-primary" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Users size={16} className="text-primary" />
              <span>{event.community}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Users size={16} className="text-primary" />
              <span>{event.attendees} attending</span>
            </div>
          </div>

          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
