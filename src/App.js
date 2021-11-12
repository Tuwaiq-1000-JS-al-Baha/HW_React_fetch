// import fetch from "fetch"
// import Card from "./components/Card"

// fetch("https://dog.ceo/api/breeds/image/random").then(function (response) {
//     return response.json()

// function AddCar() {
//   return (
//     <Card/>
//    );
// }

// export default AddCar
import axios from "axios"
import Cards from "./components/Cards"
import { useEffect, useState } from "react"
import "./App.css"

function News() {
  const [News, setNews] = useState([])
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2021-11-09&to=2021-11-09&sortBy=popularity&apiKey=fde3ae16be4340ffa648d53190b865f9"
      )
      .then(response => {
        setNews(response.data.articles)
      })
  }, [])

  return (
    <>
      {News.map(New => (
        <Cards New={New} />
      ))}
    </>
  )
}

export default News
