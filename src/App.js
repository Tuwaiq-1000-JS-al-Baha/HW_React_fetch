import axios from "axios"
import { useEffect, useState } from "react"
//import CardItem from "./componet/CardItem"
import Reqre from "./componet/Reqre"
function App() {
  const [reqres, setReqres] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then(response => {
      setReqres(response.data.data)
    })
  }, [])

 // console.log(data)
  return (
    <>
<Reqre reqres={reqres}/>
    </>
  )
}

export default App
