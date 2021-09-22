import React from 'react'
import Article from './Article';

const ArticleList = ( {blogData.posts} ) => {
    const { id, title, date, preview, minutes } = blogData.posts;
    console.log(id, "postdata")

    const articleMapper = blogData.posts.map(() => {
        return (
        <Article key={id} title={title} date={date}
        preview={preview} minutes={minutes} />

        )
    })

    return (
        <main>
            {articleMapper}
        </main>
    )
}

export default ArticleList
