import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../../lib/api"
import Seo from "../../../components/seo"
import { getStrapiMedia } from "../../../lib/media"
import Layout from '../../../components/Layout'

import styles from './styles_article.module.css'

const Article = ({ article, categories }) => {

  const imageUrl = getStrapiMedia(article.attributes.image)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <>
      <Layout>
        <Seo seo={seo} />

        <div className={styles.blog_single_banner}
          style={{background: `center url(${imageUrl})`}}
        >

          <div className={styles.overlay}></div>
          <div className={styles.banner_content}>
            <h1>{article.attributes.title}</h1>
            <p>by: <span className={styles.author}>
              <a href="">{article.attributes.author.data.attributes.name}</a> / </span><span className={styles.date}>
                <Moment format="MMM Do YYYY" className="time">
                {article.attributes.publishedAt}
              </Moment>
                </span></p>
          </div>
        </div>

        <div className={styles.article_container}>

          {/* <img src={imageUrl} alt="" /> */}

          <ReactMarkdown
            source={article.attributes.content}
            escapeHtml={false}
            className={styles.markdown}
          />
        </div>

      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}

export default Article
