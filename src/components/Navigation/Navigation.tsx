import * as React from 'react'
import styled from 'react-emotion'
import { colors } from '../../styles/variables'
import { Link } from 'gatsby'

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.ui.primary};
  color: white;
  padding: 1em;
`

const StyledNavigationLi = styled.li`
  display: flex;
  padding: 1em;
  color: white;
`

interface NavigationRootProps {
  className?: string
  title: string
}

const Navigation: React.SFC<NavigationRootProps> = ({ className, title }) => (
  <StyledNavigation className={className}>
    <StyledNavigationLi>
      <Link to="/">{title}</Link>
    </StyledNavigationLi>
    {/* refactor to forEach or map? */}
    <StyledNavigationLi>
      <Link to="/tutorials">Tutorials</Link>
    </StyledNavigationLi>
    <StyledNavigationLi>
      <Link to="/blog">Blog</Link>
    </StyledNavigationLi>
    <StyledNavigationLi>
      <Link to="/store">Store</Link>
    </StyledNavigationLi>
    <StyledNavigationLi>
      <Link to="/login">Login</Link>
    </StyledNavigationLi>
    <StyledNavigationLi>
      <Link to="/signup">Sign up</Link>
    </StyledNavigationLi>
  </StyledNavigation>
)

export default Navigation
