import React from 'react';
import Article from './Article';

function ArticleList( posts ) {
    console.log(posts.posts)

    return (
        <main>
            {posts.posts.map((post) => {
            return <Article key={post.id} posts={post} />
    })}     
        </main>
    )
}
export default ArticleList;