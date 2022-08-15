import Layout from '../../components/Layout'
import Articles from '../../components/Blog/Articles'
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import Sections from '../../components/Landing/Sections'
import Form from '../../components/Landing/Form'
import { blog } from '../../data/blog'

const Blog = ({ articles, categories, homepage }) => {

    return (
        <Layout>
            <Seo seo={homepage.attributes.seo} />
            <Sections pageData={blog} />
            <Articles articles={articles} />
            {/* <Form /> */}
        </Layout>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    try {
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
    catch {
        return {
            props: {
                articles: '',
                categories: '',
                homepage: '',
            },
            revalidate: 1,
        }
    }
}

export default Blog