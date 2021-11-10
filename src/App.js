import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "./componets/Cards"
function App() {
  const [listCard, setListCard] = useState([])
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2021-11-10&sortBy=popularity&apiKey=6b30e242cab44299bcaaed6e73dd0b90"
      )
      .then(response => {
        const items = response.data
        setListCard(items.articles)
      })
  }, [])

  return <>{<Cards card={listCard} />}</>
}

export default App
