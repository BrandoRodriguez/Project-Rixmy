import Article from '../Article'

function Articles({articles}) {

  return (
    <>
      { articles.map( article => {
        return (<Article key={article.id} article={article}/>)
      })}
    </>
  )
}

export default Articles