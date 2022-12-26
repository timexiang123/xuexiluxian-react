import React, { memo } from 'react'
import Wrapper from './style'
const Fallback = memo(() => {
  return (
    <Wrapper>Loading...</Wrapper>
  )
})

export default Fallback