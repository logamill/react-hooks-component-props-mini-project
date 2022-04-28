import React from "react";



function Article( {posts} ) {
    let bentoMins = Math.ceil(posts.minutes / 10)
    let coffeeMins = Math.ceil(posts.minutes / 5)
    console.log(coffeeMins)

    return (
        <article>
            <h3>{posts.title}</h3>
            {
            posts.date ? <small>{posts.date}</small> : <small>January 1, 1970</small>
            } 
            {
            posts.minutes > 30 ? <small> { "🍱".repeat(bentoMins) } {posts.minutes} min read </small> : <small> {"☕️".repeat(coffeeMins)} {posts.minutes} min read</small>
            }  
            <p>{posts.preview}</p>
        </article>
    )
}

export default Article