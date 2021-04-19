import React from "react"
import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title={'404 page'} />
      <h1>Page not found</h1>
    </Layout>
  )
}

export default NotFoundPage
