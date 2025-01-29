import { useState, useEffect } from 'react'
import axios from 'axios'
import Blog from './components/Blog.jsx'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newTitle, setNewTitle] = useState('a new title...')
  const [newAuthor, setNewAuthor] = useState('a new author..')
  const [newUrl, setNewUrl] = useState('a new url.')
  const [newLikes, setNewLikes] = useState('How many likes?')

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => {
        setBlogs(initialBlogs)
      })
  }, [])

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: newLikes,
    }

    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
        setNewLikes('')
      })
  }

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  const handleLikesChange = (event) => {
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
