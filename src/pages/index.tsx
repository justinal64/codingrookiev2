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
        <Header title="Become a better web developer" size="ginormous" />
        <p>Focused & high quality video tutorials for web developers and designers</p>
        <p>
          Join over 206,615 developers & designers learning with our catalogue of 1000+ free video tutorials for beginners, intermediate and
          expert web professionals. Level Up your skills with clear, high production, free video tutorials.
        </p>
        <button>Start Learning Now!</button>
      </Container>
      <Card />
      <Header title="Become a Pro size" size="ginormous" />
      <p>
        Take your skills to the next level with Level Up Pro. With over 120 exclusive videos and a new exclusive series each month, you'll
        become a pro in no time. Pay by month or by year and receive extra content and features to supercharge your learning experience.
      </p>
      <button>Learn More!</button>
      <Header title="New to Coding Rookie" size="ginormous" />
      <p>Level 1 Typescript</p>
      <p>Learn the basics of TypeScript from the ground up</p>
      <p>Img Here</p>
      <button>Buy More!</button>
    </Page>
  </IndexLayout>
)

export default IndexPage
