const BlogForm = ({addBlog, newTitle, handleAddTitle, newAuthor, handleAddAuthor}) => (
    <form onSubmit={addBlog}>
        <div>Title: <input value={newTitle} onChange={handleAddTitle}/></div>
        <div>Author: <input value={newAuthor} onChange={handleAddAuthor}/></div>
        <div>URL: <input value={newUrl} onChange={handleAddUrl}/></div>
        <div><button type="submit">Add blog</button></div>
    </form>
)

export default BlogForm