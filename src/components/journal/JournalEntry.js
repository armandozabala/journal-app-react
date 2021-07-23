import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer animate__animated animate__fadeIn animate__faster">


            <div className="journal__entry-picture" style={{
                backgrounSize: 'cover',
                backgroundImage: 'url(https://aci.aero/wp-content/uploads/2018/06/map-2.png)'
            }}>
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Varias cosas espero poder ponerla
                </p>
            </div>




            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div >
    )
}
