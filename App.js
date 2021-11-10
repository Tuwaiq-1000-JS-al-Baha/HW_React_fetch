import "./App.css"

import axios from "axios"
import { useEffect, useState } from "react"
import CardItem from "./components/CardItem"


function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then(response => {
      setUsers(response.data.data)
    })
  }, [])
  console.log(users)

  return (
    <>
    
      <CardItem users={users} />
      
    </>
  )
}
export default App
