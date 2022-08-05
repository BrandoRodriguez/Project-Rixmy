
import Section from "../../components/Landing/Section"
import Layout from '../../components/Layout'
import { nosotros } from '../../data/nosotros'

const Nosotros = () => {

    return (
        <>
            <Layout>
                {
                    nosotros.map((data, index) => {
                        return <Section key={index} data={data} />
                    })
                }
            </Layout>
        </>

    )
}

export default Nosotros