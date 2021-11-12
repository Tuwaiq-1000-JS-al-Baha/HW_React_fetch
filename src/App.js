import axios from "axios"
import { useEffect, useState } from "react"
import NewsGroup from "./Component/NewsGroup"
function App() {
  const [News, setNews] = useState([])
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-10-12&sortBy=publishedAt&apiKey=0897dcbc10bd4582b3c3b78142f0ba8e"
      )
      .then(response => {
        setNews(response.data.articles)
      })
  }, [])

  return (
    <>
      {News.map(New => (
        <NewsGroup New={New} />
      ))}
    </>
  )
}
export default App
