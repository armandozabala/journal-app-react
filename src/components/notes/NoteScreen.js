import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NoteAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />

                <textarea
                    placeholder="What happened"
                    className="notes__textarea"
                >

                </textarea>

                <div className="notes__images">
                    <img
                        src="https://i.ytimg.com/vi/-bsY1WQS0DM/maxresdefault.jpg"
                        alt="imagen"
                    />
                </div>

            </div>

        </div>
    )
}
