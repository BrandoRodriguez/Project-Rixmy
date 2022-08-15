
import Layout from '../../components/Layout'
import Sections from '../../components/Landing/Sections'
import { about_us } from '../../data/about-us'

const Nosotros = () => {

    return (
        <>
            <Layout>
                <Sections pageData={about_us}/>
            </Layout>
        </>

    )
}

export default Nosotros