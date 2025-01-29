import ReactDOM from "react-dom/client"
import App from './App'

const blogs = [
  {
    title: 'Art is easy',
    author: 'Bobby Alu',
    url: 'www.artistbob.com',
    likes: 1,
    id: 1
  },
  {
    title: 'Exercise is good',
    author: 'Ninja Turtle',
    url: 'www.fitnessturtule.com',
    likes: 5,
    id: 2
  },
  {
    title: 'Sleep is important',
    author: 'Sleep Fae',
    url: 'www.sleepbae.com',
    likes: 7,
    id: 3
  }
]

ReactDOM.createRoot(document.getElementById("root")).render(<App blogs={blogs}/>)