
import Sections from '../components/Landing/Sections'
import Video from '../components/Landing/Video'
import Layout from '../components/Layout';
import {home} from '../data/home'

const Home = () => {
  return (
    <>
      <Layout>
        {/* <Video /> */}
        <Sections pageData={home}/>
      </Layout>
    </>
  )
}
export default Home
