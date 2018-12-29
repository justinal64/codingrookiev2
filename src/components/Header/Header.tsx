import * as React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

import { heights, dimensions, colors, Size } from '../../styles/variables'
import Container from '../Container'
import { sizes } from '../types'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  /* padding: 0 ${dimensions.containerPadding}rem; */
  background-color: ${colors.transparent};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)<HeaderProps>`
  color: ${colors.lightblue};
  font-size: ${props => (props.size ? Size[props.size] : 1)};
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
  size?: sizes
}

const Header: React.SFC<HeaderProps> = ({ title, size }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/" size={size} title={title}>
        {title}
      </HomepageLink>
    </HeaderInner>
  </StyledHeader>
)

export { Header }
