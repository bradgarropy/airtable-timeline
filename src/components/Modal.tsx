import "styles/modal.css"

import EventForm from "components/EventForm"
import {format} from "date-fns"
import {useTimeline} from "hooks"
import {FC, useState} from "react"
import {ReactComponent as Pencil} from "svg/pencil.svg"
import {ReactComponent as X} from "svg/x.svg"
import {TimelineEvent} from "types"

type ModalProps = {
    isShowing: boolean
    event: TimelineEvent
    onClose: () => void
}

const Modal: FC<ModalProps> = ({isShowing, event, onClose}) => {
    const {updateEvent, deleteEvent} = useTimeline()
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    const handleSave = (event: TimelineEvent) => {
        setIsEditing(false)
        updateEvent(event.id, event)
        onClose()
    }

    const handleClose = () => {
        setIsEditing(false)
        onClose()
    }

    const handleDelete = () => {
        setIsEditing(false)
        deleteEvent(event.id)
        onClose()
    }

    if (!isShowing) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-actions">
                {isEditing ? null : (
                    <button className="modal-action" onClick={handleEdit}>
                        <Pencil width="1.75rem" />
                    </button>
                )}

                <button className="modal-action" onClick={handleClose}>
                    <X width="1.75rem" />
                </button>
            </div>

            <div className="modal-body">
                {isEditing ? (
                    <EventForm
                        event={event}
                        onCancel={handleCancel}
                        onSave={handleSave}
                    />
                ) : (
                    <>
                        <h2>{event.name}</h2>

                        <p>{`${format(new Date(event.start), "P")} - ${format(
                            new Date(event.end),
                            "P",
                        )}`}</p>

                        <button
                            type="button"
                            className="actions button primary"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Modal
