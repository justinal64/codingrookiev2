import * as React from 'react'
import styled from 'react-emotion'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
)

export default LayoutRoot
