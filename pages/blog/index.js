import Layout from '../../components/Layout'
import Articles from '../../components/Blog/Articles'
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"

const Blog = ({ articles, categories, homepage }) => {

    return (
        <Layout>
            {/* <Seo seo={homepage.attributes.seo}/> */}
            <Articles articles={articles}/>
            {/* <Articles articles={} /> */}
        </Layout>
    )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
      fetchAPI("/articles", { populate: "*" }),
      fetchAPI("/categories", { populate: "*" }),
      fetchAPI("/homepage", {
          populate: {
              hero: "*",
              seo: { populate: "*" },
          },
      }),
  ])

  return {
      props: {
          articles: articlesRes.data,
          categories: categoriesRes.data,
          homepage: homepageRes.data,
      },
      revalidate: 1,
  }
}



  

export default Blog