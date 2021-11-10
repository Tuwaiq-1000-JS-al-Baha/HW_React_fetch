import axios from "axios"
import { useEffect, useState } from "react"
import FilmGroubs from "./components/FilmGroups"

function App() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    axios.get("https://ghibliapi.herokuapp.com/films").then(respons => {
      setFilms(respons.data)
    })
  }, [])
  console.log(films)

  return (
    <>
      <FilmGroubs films={films} />
    </>
  )
}

export default App
