import axios from "axios"
import { useEffect, useState } from "react"
import CardItem from "./component/CardItem"
import { Card, Row, Col } from "react-bootstrap"
import Articles from "./component/Articles"

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-10-11&sortBy=publishedAt&apiKey=641d0ec32d4f48339730ba82504d5b32"
      )
      .then(response => {
        setArticles(response.data.articles)
      })
  }, [])

  return (
    <>
      <Articles articles={articles} />
    </>
  )
}

export default App
