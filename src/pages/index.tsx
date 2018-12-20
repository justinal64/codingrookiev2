import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Become a better web developer</h1>
        <p>Focused & high quality video tutorials for web developers and designers</p>
        <p>
          Join over 206,615 developers & designers learning with our catalogue of 1000+ free video tutorials for beginners, intermediate and
          expert web professionals. Level Up your skills with clear, high production, free video tutorials.
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
