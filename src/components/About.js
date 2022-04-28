import React from "react";

function About( image ) {
    console.log(image)
    return (
        <aside>
            {
            image.image ? <img src={image.image} alt="blog logo"></img> : <img src="https://via.placeholder.com/215" alt="blog logo"></img>
            }
            <p>{image.about}</p>
        </aside>
    )
}

export default About