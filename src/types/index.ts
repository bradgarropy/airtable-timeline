export type TimelineEvent = {
    id: number
    start: string
    end: string
    name: string
}

export type TimelineContext = {
    events: TimelineEvent[]
    startDate: Date
    endDate: Date
    lanes: TimelineEvent[][]
    width: number
    height: number
    updateEvent: (id: TimelineEvent["id"], event: TimelineEvent) => void
    deleteEvent: (id: TimelineEvent["id"]) => void
    zoomIn: () => void
    zoomOut: () => void
}
