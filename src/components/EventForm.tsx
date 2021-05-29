import "styles/event-form.css"

import {ChangeEvent, FC, FormEvent, useState} from "react"
import {TimelineEvent} from "types"

type EventFormProps = {
    event: TimelineEvent
    onCancel: () => void
    onSave: (event: TimelineEvent) => void
}

const EventForm: FC<EventFormProps> = ({event, onCancel, onSave}) => {
    const [newEvent, setNewEvent] = useState(event)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewEvent({...newEvent, [e.target.name]: e.target.value})
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSave(newEvent)
    }

    return (
        <form className="event-form" onSubmit={onSubmit}>
            <label htmlFor="name" className="event-form-label">
                Name
            </label>

            <input
                type="text"
                id="name"
                name="name"
                className="event-form-input"
                value={newEvent.name}
                onChange={onChange}
            />

            <label htmlFor="start" className="event-form-label">
                Start
            </label>

            <input
                type="date"
                id="start"
                name="start"
                className="event-form-input"
                value={newEvent.start}
                onChange={onChange}
            />

            <label htmlFor="end" className="event-form-label">
                End
            </label>

            <input
                type="date"
                id="end"
                name="end"
                className="event-form-input"
                value={newEvent.end}
                onChange={onChange}
            />

            <div className="actions">
                <button
                    type="button"
                    className="button secondary"
                    onClick={onCancel}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="button primary"
                    onClick={onSubmit}
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default EventForm
