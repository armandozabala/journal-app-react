import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">

            <Sidebar />


            <main>


                { /*<NothingSelected /> */}

                <NoteScreen />



            </main>

        </div>
    )
}
