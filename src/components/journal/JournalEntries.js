import React from 'react'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {

    const entries = [1, 2, 3, 5, 1, 2, 3, 5]

    return (
        <div className="journal__entries">

            {
                entries.map(value => (
                    <JournalEntry key={value} />
                ))
            }

        </div>
    )
}
