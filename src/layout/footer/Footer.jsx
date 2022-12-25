import React, { memo } from 'react'
import Swiper from '@/components/swiper/swiper'
import { FooterWrapper } from './style'
const Footer = memo((props) => {
  const isShow = props.isShow
  return (
    isShow && (
      <FooterWrapper>
        <Swiper></Swiper>
      </FooterWrapper>
    )
  )
})

export default Footer
