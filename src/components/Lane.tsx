import "styles/lane.css"

import Event from "components/Event"
import {FC} from "react"
import {TimelineEvent} from "types"

type LaneProps = {
    lane: number
    events: TimelineEvent[]
}

const Lane: FC<LaneProps> = ({lane, events}) => {
    return (
        <>
            {events.map(event => {
                return <Event key={event.id} lane={lane} event={event} />
            })}
        </>
    )
}

export default Lane
