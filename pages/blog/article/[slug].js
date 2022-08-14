
import Seo from "../../../components/seo"
import { getStrapiMedia } from "../../../lib/media"
import { fetchAPI } from '../../../lib/api';
import Layout from '../../../components/Layout';
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import rehypeRaw from 'rehype-raw'


function Article({ article, categories }) {

  const imageUrl = getStrapiMedia(article.attributes.image)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <Layout>
      <Seo seo={seo} />
      <img src={imageUrl} alt="" />

      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        // eslint-disable-next-line react/no-children-prop
        children ={article.attributes.content}
      />

      <Moment format="MMM Do YYYY">
        {article.attributes.published_at}
      </Moment>

    </Layout>

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
    props: {
      article: articlesRes.data[0],
      categories: categoriesRes
    },
    revalidate: 1,
  }
}

export default Article