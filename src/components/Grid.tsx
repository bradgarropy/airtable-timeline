import "styles/grid.css"

import {useTimeline} from "hooks"
import {FC} from "react"

const Grid: FC = () => {
    const {width, height} = useTimeline()
    const gridLines = Array(width).fill(undefined)

    return (
        <>
            {gridLines.map((_, index) => {
                return (
                    <div
                        key={index}
                        className="grid-line"
                        style={{
                            gridColumnStart: index + 1,
                            gridRowStart: 1,
                            gridRowEnd: height + 1,
                        }}
                    />
                )
            })}
        </>
    )
}

export default Grid
