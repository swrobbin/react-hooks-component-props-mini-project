import React from 'react'

function About({image='https://via.placeholder.com/215', info }) {
    return (
        <div>
            <aside>
                <img src={image} alt="blog logo" />
                <p>{info}</p>
            </aside>
            
        </div>
    )
}

export default About
