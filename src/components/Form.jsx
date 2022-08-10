import {useState, useEffect} from 'react'

const Form = () => {

        const[formSubmitted, setFormSubmitted] = useState(false)
        const [validForm, setValidForm] = useState(false)
        const [errorMessage, setErrorMessage] = useState("")
        const [form, setForm] = useState({})
      
        useEffect(() => {
          //fetch stuff
          if (form?.title?.length > 3 && form?.description?.length > 10) { // this is counting the characters that are in the string
            setValidForm(true)
          } else {
            setValidForm(false)
          }
        }, [form]) 
      
        // console.log(title)
      
        // const formSubmit = async (e) // same as the line below 
        async function formSubmit (e) {
          e.preventDefault() //stops the page refresh
      
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
              
              //really submit it to the api (sending the data to the api) using async/await
              const results = await fetch ('https://sql.bocacode.com/comments', {
                method:"POST",
                headers: {
                  "Content-Type" : "application/json"
                }, 
                body: JSON.stringify(form) //sending the object using the variable comment in JSON format 
              })
              console.log(results)
              const data = await results.json() //retrieving the results from the json format into a string 
              
              console.log(data)
              setFormSubmitted(true)
              setErrorMessage("")
              setValidForm(true)
              alert("Wow! Submitted")
      
              } catch(error) {
                console.error(error)
                setErrorMessage("there was an error submitting your comment" + error.toString())
              }
            
          }
      
          //this is handling all of the events for title author and description 
          console.log("this is form =>", form)
          const updateForm = (event) => {
            // setForm({[event.target.name]: event.target.value})
            setForm(...form, {[event.target.name]: event.target.value})
          }
      
      
          return (
            <div className="App">
                          
            <form onSubmit={formSubmit}>
      
                <h1>Comments</h1>
      
                <label>Title</label>
                  <input 
                  type="text" 
                  name= "title"
                  value={form.title} 
                  onChange={updateForm} />
                  <h2>{form.title}</h2>
      
                <label>Description</label>
                  <textarea 
                  value={form.description} 
                  name= 'description'
                  onChange ={ updateForm } />
                  <h2>{form.description}</h2>
      
                <label>Author</label>
                  <select 
                  value ={form.author}
                  name = 'author' 
                  onChange={ updateForm }>
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
                  <h2>{form.author}</h2>
      
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

export default Form;