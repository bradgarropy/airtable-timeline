import "styles/index.css"
import "styles/app.css"

import Timeline from "components/Timeline"
import {TimelineProvider} from "context"
import {render} from "react-dom"
import {ReactComponent as Airtable} from "svg/airtable.svg"

const App = () => {
    return (
        <section className="app">
            <header>
                <Airtable />
                <h1>Airtable Timeline</h1>
            </header>

            <main>
                <TimelineProvider>
                    <Timeline />
                </TimelineProvider>
            </main>
        </section>
    )
}

render(<App />, document.getElementById("root"))
