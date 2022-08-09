import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("this is the title")
  const [description, setDescription] = useState("your description")
  const [author, setAuthor] = useState("")

  console.log(title)

  function formSubmit (e) {
    e.preventDefault()
    console.log("form submitted") //here we are showing we are in full controll of the submit button

  }

  return (
    <div className="App">
      <form onSubmit={formSubmit}>
          <h1>Comments</h1>

          {/* here goes the title */}
          <label>Title</label>
            <input type="text" value={title} onChange={(e)=> {setTitle (e.target.value)}} />
            <h2>{title}</h2>

          {/* here goes the desciption */}
          <label>Description</label>
            <textarea value={description} onChange ={(e)=> {setDescription(e.target.value)}} />
            <h2>{description}</h2>

          {/* here goes the author selection */}
          <label>Author</label>
            <select value ={author} onChange={(e) => {setAuthor(e.target.value)}}>
              <option value="todd">Todd</option>
              <option value="damian">Damian</option>
              <option value="darie">Darie</option>
              <option value="jonathan">Jonathan</option>
              <option value="ludwigson" >Ludwigson</option>
              <option value="ronnie">Ronnie</option>
              <option value="noah">Noah</option>
              <option value=""selected>Choose One </option> 
              {/* the default would be the first one unless you put selected */}
            </select>
            <h2>{author}</h2>

          {/* here goes the submit button */}
          <button>Submit Form</button>

      </form>
    </div>
  );
}

export default App;
