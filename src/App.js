import axios from "axios"
import { useEffect, useState } from "react"
import NewItem from "./components/NewItem"
import { Row } from "react-bootstrap"
function App() {
  const [News, setNews] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2021-11-11&sortBy=popularity&apiKey=4ff17d68ee6c46f9bdf7ce4b27d23ad0"
      )
      .then(response => {
        console.log(response.data.articles)
        setNews(response.data.articles)
      })
  }, [])
  return (
    <>
      <h1>News: </h1> <br /> <br />
      <Row xs={1} md={3} className="g-4">
        {News.map(New => (
          <NewItem New={New} />
        ))}
      </Row>
    </>
  )
}

export default App
