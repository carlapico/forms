import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  const [validForm, setValidForm] = useState(false)
  const[formSubmitted, setFormSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("your description")
  const [author, setAuthor] = useState("todd")

  useEffect(() => {
    //fetch stuff
    if (title > 3 && description > 10) { // this is counting the characters that are in the string
      setValidForm(true)
    }
  }, [title,description,author]) 

  // console.log(title)

  // const formSubmit = async (e) // same as the line below 
  async function formSubmit (e) {
    e.preventDefault()

    if (!validForm){
      setErrorMessage ("Not a valid form!")
      return
    }

      try {
      console.log("form submitted") //here we are showing we are in full controll of the submit button
      
      // const comment = {
        //     title:title, 
        //     description:description,
        //     author:author,
        // }
        
        const comment = {
          title, 
          description,
          author,
        } // this only works with variable with the same name and the same variable, only works with javascript and not json  
        
        
        console.log(comment)
        
        //really submit it to the api (sending the data to the api) using async/await
        const results = await fetch ('https://sql.bocacode.com/comments', {
          method:"POST",
          headers: {
            "Content-Type" : "application/json"
          }, 
          body: JSON.stringify(comment) //sending the object using the variable comment in JSON format 
        })
        console.log(results)
        const data = await results.json() //retrieving the results from the json format into a string 
        
        console.log(data)


        } catch(error) {
          console.error(error)
          setErrorMessage("there was an error submitting your comment" + error.toString())
        }
      
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
          {!formSubmitted &&
              <button>Submit Form</button>
          }
            {errorMessage &&
              <h1>There was an error! 
                <br />{errorMessage}</h1>
            } 

      </form>

    </div>
  );
}

export default App;
