import * as React from 'react'
import styled from 'react-emotion'

const StyledNavigation = styled.div`
  display: flex;
  /* min-height: 10vh; */
  background-color: pink;
  display: flex;
  justify-content: space-between;
`
const StyledNavigationLogo = styled.div`
  display: flex;
`

const StyledNavigationDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`

const StyledNavigationLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1em;
`

interface NavigationRootProps {
  className?: string
  title: string
}

const Card: React.SFC<NavigationRootProps> = ({ className, title }) => (
  <div>
    <span>Span</span>
    <span>Span</span>
    <span>Span</span>
    <span>Span</span>
    <span>Span</span>
  </div>
)

export default Card
