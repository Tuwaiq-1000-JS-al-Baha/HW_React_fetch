import NewsItem from "./News"
function NewsItem(props) {
  return props.news.map(news=> <NewsItem news={news} />)
}

export default NewsItem

