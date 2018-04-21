import * as React from 'react';
import { Props } from './searchForm';

const Articles = ({ articles }: Props) => (
    <div>
        {articles.map((article) => {
            return (
                <div key={article.id}>
                    <img style={{width: "100px", height: "100px"}} src={article.user.profile_image_url} alt="Card image cap" />
                    <div>{article.title}</div>
                    <a href={article.url}>{article.url}</a>
                </div>
            )
        })}
    </div>
)

export default Articles;