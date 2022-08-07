
import Section from "../../components/Landing/Section"
import Layout from '../../components/Layout'
import { about_us } from '../../data/about-us'

const Nosotros = () => {

    return (
        <>
            <Layout>
                {
                    about_us.map((data, index) => {
                        return <Section key={index} data={data} />
                    })
                }
            </Layout>
        </>

    )
}

export default Nosotros