import React from 'react'

function Header({blogName}) {
    console.log(blogName)
    return (
        <div>
           <h1>{blogName}</h1> 
        </div>
    )
    
}

export default Header