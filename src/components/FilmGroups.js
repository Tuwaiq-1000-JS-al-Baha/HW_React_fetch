import FilmItem from "./Films"
function FilmGroubs(props) {
  return props.films.map(film => <FilmItem film={film} />)
}

export default FilmGroubs
