import Seo from "../../../components/seo"
import { fetchAPI } from '../../../lib/api';
import Layout from '../../../components/Layout';
import ArticleDescription from '../../../components/Blog/ArticleDescription';

function Article({ article, categories }) {

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <Layout>
      <Seo seo={seo} />
      <ArticleDescription article={article} />
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

  const [articlesRes, categoriesRes] = await Promise.all([
    fetchAPI("/articles", {
      filters: {
        slug: params.slug,
      },
      populate: "*",
    }),
    fetchAPI("/categories")
  ])

  return {
    props: {
      article: articlesRes.data[0],
      categories: categoriesRes
    },
    revalidate: 1,
  }
}

export default Article