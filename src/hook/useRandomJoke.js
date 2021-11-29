import  {useEffect, useState} from 'react'

function useRandomJoke(firstname, lastname) {
  const [joke, setJoke] = useState("");

  const fetchJokes = async ()=> await fetch(
    `http://api.icndb.com/jokes/random?firstName=${firstname}&lastName=${lastname}`
    )
    .then(res => res.json())
    .then(data=> setJoke(data.value.joke))

  
    
   
  useEffect(()=>{
      
    fetchJokes()
     // eslint-disable-next-line 
  },[firstname, lastname])

  return joke;

}

export default useRandomJoke
