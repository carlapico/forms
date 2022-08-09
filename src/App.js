import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("this is the title")
  const [description, setDescription] = useState("your description")
  console.log(title)

  return (
    <div className="App">
      <form>
          <h1>Comments</h1>
          
          <label>Title</label>
            <input type="text" value={title} onChange={(e)=> {setTitle (e.target.value)}} />
            <h3>{title}</h3>

          <label>Description</label>
            <textarea value={description} onChange ={(e)=> {setDescription(e.target.value)}}></textarea>
            <h3>{description}</h3>
      </form>
    </div>
  );
}

export default App;
