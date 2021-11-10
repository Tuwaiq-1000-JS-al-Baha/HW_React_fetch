import axios from "axios"
import { useEffect, useState } from "react"
import Useritems from "./componets/Useritems"
import "./componets/Card.css"

function App() {
  const [Users, setUsers] = useState([])
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then(response => {
      setUsers(response.data.data)
    })
  }, [])
  return (
    <>
      <h1>Api Users</h1>
      {Users.map(user => (
        <Useritems user={user} />
      ))}
    </>
  )
}

export default App
