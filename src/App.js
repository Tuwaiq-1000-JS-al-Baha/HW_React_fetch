import axios from "axios"
import { useEffect, useState } from "react"
import NavbarItem from "./components/NavbarItem"
import CardItem from "./components/CardItem"
function App() {
  const [users, setusers] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then(Response => {
      setusers(Response.data.data)
    })
  }, [])

  return (
    <>
      <NavbarItem />
      <CardItem users={users} />
      ))
    </>
  )
}
export default App
