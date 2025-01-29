import { useState } from 'react'
import Blog from './components/Blog.jsx'

const App = (props) => {
  const [blogs, setBlogs] = useState(props.blogs)
  const [newTitle, setNewTitle] = useState('a new title...')
  const [newAuthor, setNewAuthor] = useState('a new author..')
  const [newUrl, setNewUrl] = useState('a new url.')
  const [newLikes, setNewLikes] = useState('How many likes?')

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: newLikes,
      id: String(blogs.length + 1)
    }

    setBlogs(blogs.concat(blogObject))
    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
    setNewLikes('')
  }

  const handleTitleChange = (event) => {
    console.log(event.target.value)
    setNewTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    console.log(event.target.value)
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    console.log(event.target.value)
    setNewUrl(event.target.value)
  }

  const handleLikesChange = (event) => {
    console.log(event.target.value)
    setNewLikes(event.target.value)
  }

  return (
    <div>
      <h1>Blog List</h1>      
      <h2>Add new blog</h2>

      <form onSubmit={addBlog}>

        <p>Title: 
          <input
            value={newTitle}
            onChange={handleTitleChange}
          />
        </p>

        <p>Author: 
          <input
            value={newAuthor}
            onChange={handleAuthorChange}
          />
        </p>

        <p>URL: 
          <input
            value={newUrl}
            onChange={handleUrlChange}
          />
        </p>

        <p>Likes: 
          <input
            value={newLikes}
            onChange={handleLikesChange}
          />
        </p>

        <button type="submit">Add blog</button>
      </form>

      <h2>Current list of blogs</h2>
      <ul>
        {blogs.map(blog => 
          <Blog key={blog.id} blog={blog} />
        )}
      </ul>
    </div>
  )
}

export default App
