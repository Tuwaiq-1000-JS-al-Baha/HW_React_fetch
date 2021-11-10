import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./component/Card"

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-10-10&sortBy=publishedAt&apiKey=fe255df78eec43e482e24a5f0b788fdb"
      )
      .then(response => {
        setArticles(response.data.articles)
      })
  }, [])
  console.log(articles)
  return <Card articles={articles} />
}
export default App
