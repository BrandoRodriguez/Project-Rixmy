
import Layout from '../../components/Layout'
import Sections from '../../components/Landing/Sections'
import { services } from '../../data/services'


const Services = () => {

    return (
        <>
            <Layout>
                <Sections pageData={services}/>
            </Layout>
        </>
    )
}

export default Services