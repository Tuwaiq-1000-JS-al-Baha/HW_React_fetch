import axios from "axios"
import { useEffect, useState } from "react"
import UserGroub from "./components/UserGroub"

function App() {
  const [Users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then(respones => {
      setUsers(respones.data.data)
    })
  }, [])
  console.log(Users)

  return (
    <>
      <h1> User :</h1>
      <UserGroub Users={Users} />
    </>
  )
}

export default App
