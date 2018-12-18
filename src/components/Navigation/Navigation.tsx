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

const Navigation: React.SFC<NavigationRootProps> = ({ className, title }) => (
  <StyledNavigation className={className}>
    <StyledNavigationLogo>
      <StyledNavigationLi>{title}</StyledNavigationLi>
    </StyledNavigationLogo>
    <StyledNavigationDiv>
      <StyledNavigationLi>Tutorials</StyledNavigationLi>
      <StyledNavigationLi>Blog</StyledNavigationLi>
      <StyledNavigationLi>Store</StyledNavigationLi>
      <StyledNavigationLi>Login</StyledNavigationLi>
      <StyledNavigationLi>Sign Up</StyledNavigationLi>
    </StyledNavigationDiv>
  </StyledNavigation>
)

export default Navigation
