import timelineItems from "data/timelineItems"
import {addDays, subDays} from "date-fns"
import differenceInDays from "date-fns/differenceInDays"
import {createContext, FC, useState} from "react"
import {TimelineContext as TimelineCtx, TimelineEvent} from "types"
import {getEndDate, getStartDate} from "utils/items"
import {assignLanes} from "utils/lanes"

const TimelineContext = createContext({} as TimelineCtx)

const TimelineProvider: FC = ({children}) => {
    const [events, setEvents] = useState(timelineItems)
    const [startDate, setStartDate] = useState(getStartDate(events))
    const [endDate, setEndDate] = useState(getEndDate(events))

    const lanes = assignLanes(events)
    const width = Math.max(0, differenceInDays(endDate, startDate) + 1)
    const height = lanes.length

    const updateEvent = (id: TimelineEvent["id"], event: TimelineEvent) => {
        const index = events.findIndex(e => e.id === id)
        const newEvents = Array.from(events)
        newEvents[index] = event

        setEvents(newEvents)
    }

    const deleteEvent = (id: TimelineEvent["id"]): void => {
        const newEvents = Array.from(events)
        const index = events.findIndex(e => e.id === id)
        newEvents.splice(index, 1)

        setEvents(newEvents)
    }

    const zoomIn = () => {
        const newStartDate = addDays(startDate, 1)
        const newEndDate = subDays(endDate, 1)

        if (differenceInDays(newEndDate, newStartDate) > 0) {
            setStartDate(newStartDate)
            setEndDate(newEndDate)
        }
    }

    const zoomOut = () => {
        setStartDate(subDays(startDate, 1))
        setEndDate(addDays(endDate, 1))
    }

    const context = {
        events,
        startDate,
        endDate,
        lanes,
        width,
        height,
        updateEvent,
        deleteEvent,
        zoomIn,
        zoomOut,
    }

    return (
        <TimelineContext.Provider value={context}>
            {children}
        </TimelineContext.Provider>
    )
}

export {TimelineContext, TimelineProvider}
