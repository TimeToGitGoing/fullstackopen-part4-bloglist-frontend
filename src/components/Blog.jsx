const Blog = ({ blog }) => {
    return (
        <li>
            <h2>{blog.title}</h2>
            <h3>{blog.author}</h3>
            <p>{blog.url}</p>
            <p>Likes: {blog.likes}</p>
        </li>
    )
}

export default Blog