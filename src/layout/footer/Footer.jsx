import React, { memo } from 'react'
import {FooterWrapper} from './style'
const Footer = memo((props) => {
  const isShow = props.isShow
  return isShow && <FooterWrapper>Footer</FooterWrapper>
})

export default Footer
