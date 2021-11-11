import axios from "axios"
import { useEffect, useState } from "react"

import CardItems from "./component/CardItems"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2")
    .then(response => {
      setUsers(response.data.data)
    })
  }, [])

  // console.log(users)
  return (
    <>
      {/* <h1>hello</h1> */}
     
     <CardItems users={users} />
  
    </>
  )
}

export default App;
