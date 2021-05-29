/* eslint-disable */
// @ts-nocheck

import {sortItems} from "utils/items"

const assignLanes = items => {
    const sortedItems = sortItems(items)
    const lanes = []

    function assignItemToLane(item) {
        for (const lane of lanes) {
            if (new Date(lane[lane.length - 1].end) < new Date(item.start)) {
                lane.push(item)
                return
            }
        }
        lanes.push([item])
    }

    for (const item of sortedItems) {
        assignItemToLane(item)
    }

    return lanes
}

export {assignLanes}
