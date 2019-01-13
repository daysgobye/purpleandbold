import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

//components
import Landing from '../components/Landing/Landing'
import Hero from '../components/Hero/Hero'

import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'

import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'

const IndexPage = () => (
  <div>
    <Landing />
    <Layout>
      <Hero />
      <Services />
      {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
      <h1>Hi people back to before merge</h1>
      {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
      <Contact />
    </Layout>
  </div>
)

export default IndexPage
