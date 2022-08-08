
import Section2 from "../../components/Landing/Section2"
import Layout from '../../components/Layout'
import { about_us } from '../../data/about-us'

const Nosotros = () => {

    return (
        <>
            <Layout>
                {
                    about_us.map((data, index) => {
                        return <Section2 key={index} data={data} />
                    })
                }
            </Layout>
        </>

    )
}

export default Nosotros