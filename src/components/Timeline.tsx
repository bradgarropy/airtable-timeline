import "styles/timeline.css"

import Grid from "components/Grid"
import Lane from "components/Lane"
import {useTimeline} from "hooks"
import {FC, WheelEvent} from "react"
import {TimelineEvent} from "types"

type TimelineProps = {
    items: TimelineEvent[]
}

const Timeline: FC<TimelineProps> = () => {
    const {lanes, width, height, zoomIn, zoomOut} = useTimeline()

    const onWheel = (event: WheelEvent) => {
        event.deltaY < 0 ? zoomIn() : zoomOut()
    }

    return (
        <div
            className="timeline"
            onWheel={onWheel}
            style={{
                gridTemplateColumns: `repeat(${width}, 1fr)`,
                gridTemplateRows: `repeat(${height}, 2rem)`,
            }}
        >
            {lanes.map((lane, index) => {
                return <Lane key={index} lane={index} events={lane} />
            })}

            <Grid />
        </div>
    )
}

export default Timeline
