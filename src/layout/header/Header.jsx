import React, { memo } from 'react'
import {HeaderWrapper} from './style'
const Header = memo((props) => {
  const isShow = props.isShow
  return isShow && <HeaderWrapper>Header</HeaderWrapper>
})

export default Header
