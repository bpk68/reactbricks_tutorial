import Head from 'next/head'
import Layout from '../components/layout'

const Page: React.FC = () => {  

  return (
    <Layout>
      <Head>
        <title>Raw page title</title>
        <meta name="description" content="a non react bricks page" />
      </Head>
      <h1>this is a demo page with no react bricks stuff</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dolorem beatae atque velit quam corporis expedita nihil natus voluptate. Voluptatem, earum reiciendis! Cumque voluptate eum rerum. Minus rem blanditiis architecto.</p>

    </Layout>
  )
}

export default Page
