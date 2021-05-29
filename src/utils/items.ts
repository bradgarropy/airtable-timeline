import {TimelineEvent} from "types"

const sortItems = (items: TimelineEvent[]): TimelineEvent[] => {
    const sortedItems = items.sort((a, b) => {
        return new Date(a.start).getTime() - new Date(b.start).getTime()
    })

    return sortedItems
}

const getStartDate = (items: TimelineEvent[]): Date => {
    const sortedItems = sortItems(items)
    const start = sortedItems[0].start
    const startDate = new Date(start)

    return startDate
}

const getEndDate = (items: TimelineEvent[]): Date => {
    const sortedItems = sortItems(items)
    const end = sortedItems[sortedItems.length - 1].end
    const endDate = new Date(end)

    return endDate
}

export {getEndDate, getStartDate, sortItems}
