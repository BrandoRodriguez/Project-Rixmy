
import Seo from "../../components/seo"
import Articles from "../../components/Blog/Articles"
import { fetchAPI } from "../../lib/api"

import Layout from '../../components/Layout'

import styles from './styles.module.css'
import Script from 'next/script'
const Blog = ({ articles, categories, homepage }) => {

  return (
    <>
      <Layout>
        <Seo seo={homepage.attributes.seo} />
        <section className={styles.blog_section}>
          <h1>{homepage.attributes.hero.title}</h1>
          <div className={styles.container}>
            <div className={styles.blog_wrapper}>
              <Articles articles={articles} />
            </div>
          </div>
        </section>
        <Script id='1' src="https://unpkg.com/aos@next/dist/aos.js" strategy='beforeInteractive'></Script>
        <Script id='2'>
          AOS.init()
        </Script>
      </Layout>
    </>

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