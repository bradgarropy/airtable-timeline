import {TimelineContext} from "context"
import {useContext} from "react"
import {TimelineContext as TimelineCtx} from "types"

const useTimeline = (): TimelineCtx => {
    const timelineCtx = useContext(TimelineContext)
    return timelineCtx
}

export default useTimeline
