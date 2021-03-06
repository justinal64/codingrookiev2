import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Card from '../components/Card/Card'
import { Header } from '../components/Header/Header'
import styled from 'react-emotion'

// this will need to be a local image
// and should probably have less words
const Div = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: blue;
  background-image: url('https://i.pinimg.com/originals/b9/d6/42/b9d642ea59ce1b544d6b20804bdde581.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
`

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Div />
        <Header title="Welcome to my website" size="ginormous" />
        <p>
          I am a full stack developer from Nashville TN. When I'm not learning something new you will find me spending time with my family.
        </p>
        <button>Start Learning Now!</button>
      </Container>
      <Card />
    </Page>
  </IndexLayout>
)

export default IndexPage
