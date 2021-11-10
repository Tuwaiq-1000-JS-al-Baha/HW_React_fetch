import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import Cards from "./comonts/Cards"

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2021-11-10&sortBy=popularity&apiKey=6b30e242cab44299bcaaed6e73dd0b90"
      )
      .then(response => {
        const items =(response.data)
        setNews(items.articles)

      })
  }, [])

  console.log(news)
  return <>
  {<Cards news={news}/>}
  </>
}

export default App
