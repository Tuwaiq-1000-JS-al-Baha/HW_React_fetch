import axios from "axios"
import { useEffect, useState } from "react"
import NewItem from "./components/NewItem"

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get("https://newsapi.org/docs/get-started").then(respons => {
      setNews(respons.data)
    })
  }, [])
  console.log(news)

  return (
    <>
      <NewItem newa={news} />
    </>
  )
}

export default App