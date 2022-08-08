
import Section from "../../components/Landing/Section"
import Layout from '../../components/Layout'
import { services } from '../../data/services'

const Nosotros = () => {

    return (
        <>
            <Layout>
                {
                    services.map((data, index) => {
                        return <Section key={index} data={data} />
                    })
                }
            </Layout>
        </>
    )
}

export default Nosotros