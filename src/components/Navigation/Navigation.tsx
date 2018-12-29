import * as React from 'react'
import styled from 'react-emotion'

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  /* min-height: 10vh; */
  background-color: pink;
  /* justify-content: space-between; */
`

const StyledNavigationLi = styled.li`
  display: flex;
  padding: 1em;
`

interface NavigationRootProps {
  className?: string
  title: string
}

const Navigation: React.SFC<NavigationRootProps> = ({ className, title }) => (
  <StyledNavigation className={className}>
    <StyledNavigationLi>{title} Logo Here!!</StyledNavigationLi>
    {/* refactor to forEach or map? */}
    <StyledNavigationLi>Tutorials</StyledNavigationLi>
    <StyledNavigationLi>Blog</StyledNavigationLi>
    <StyledNavigationLi>Store</StyledNavigationLi>
    <StyledNavigationLi>Login</StyledNavigationLi>
    <StyledNavigationLi>Sign Up</StyledNavigationLi>
  </StyledNavigation>
)

export default Navigation
