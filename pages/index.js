
import Sections from '../components/Landing/Sections'
import Video from '../components/Landing/Video'
import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <Layout>
        {/* <Video /> */}
        <Sections />

        <div>
          <div style={{
            background: `url(/img/sections/about_us.jpg)`,
            backgroundSize: 'cover'
          }}>

          </div>
        </div>
      </Layout>
    </>
  )
}
export default Home
