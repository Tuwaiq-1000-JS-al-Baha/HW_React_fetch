import axios from "axios"
import { useState, useEffect } from "react"
import CartItem from "./components/CardItem"
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2 ").then(response => {
      setUsers(response.data.data)
      console.log(users)
    })
  }, [])

  return (
    <>
      <CartItem users={users} />
    </>
  )
}

export default App
