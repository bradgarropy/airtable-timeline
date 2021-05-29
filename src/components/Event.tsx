import "styles/event.css"

import {isAfter, isBefore} from "date-fns"
import differenceInDays from "date-fns/differenceInDays"
import {useTimeline} from "hooks"
import {FC, useState} from "react"
import {TimelineEvent} from "types"

import Modal from "./Modal"

type EventProps = {
    lane: number
    event: TimelineEvent
}

const Event: FC<EventProps> = ({lane, event}) => {
    const {startDate, endDate} = useTimeline()
    const [isShowing, setIsShowing] = useState(false)

    if (isAfter(startDate, new Date(event.end))) {
        return null
    }

    if (isBefore(endDate, new Date(event.start))) {
        return null
    }

    const eventStart = isAfter(startDate, new Date(event.start))
        ? 1
        : differenceInDays(new Date(event.start), startDate) + 1

    const eventDuration = isAfter(startDate, new Date(event.start))
        ? differenceInDays(new Date(event.end), startDate) + 1
        : differenceInDays(new Date(event.end), new Date(event.start)) + 1

    const onClick = () => {
        setIsShowing(true)
    }

    const onClose = () => {
        setIsShowing(false)
    }

    return (
        <>
            <button
                className="event"
                onClick={onClick}
                style={{
                    gridRowStart: lane + 1,
                    gridColumnStart: eventStart,
                    gridColumnEnd: `span ${eventDuration}`,
                }}
            >
                <p className="event-name">{event.name}</p>
            </button>

            <Modal isShowing={isShowing} event={event} onClose={onClose} />
        </>
    )
}

export default Event
