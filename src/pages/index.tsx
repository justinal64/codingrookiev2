import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Card from '../components/Card/Card'
import { Header } from '../components/Header/Header'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Header title="Who I am" size="ginormous" />
        <p>Focused & high quality video tutorials for web developers and designers</p>
        <button>Start Learning Now!</button>
      </Container>
      <Card />
    </Page>
  </IndexLayout>
)

export default IndexPage
