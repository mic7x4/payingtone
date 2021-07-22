import React from 'react'

function AfterNavSection({heading,paragraph}) {
    return (
        <section>
            <div  className="text__ins">
                <h1>{heading}</h1>
                <p>{paragraph}</p>
            </div>
        </section>
    )
}

export default AfterNavSection
