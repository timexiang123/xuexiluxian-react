import styled from 'styled-components'
export const FooterWrapper = styled.div`
  width: 100%;
  min-width: 1140px;
  height: 150px;
  background: var(--primaryColor);
  .footer-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: #ffffff;
    margin: auto;
    img {
      cursor: pointer;
    }
    .footer-xlx {
      width: 110px;
      opacity: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .footer-factory {
      width: 130px;
      margin: 0 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .copy-top {
      font-size: 14px;
      margin: 0 10px 10px 50px;
      display: flex;
      li {
        margin: 0 10px;
        a {
          color: #fff;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .copy-bottom {
      font-size: 12px;
      a {
        color: #fff;
        margin-right: 10px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .wx {
      margin-left: 20px;
      width: 80px;
      height: 100px;
      font-size: 12px;
      .wx-bg {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .wx-dsc {
        text-align: center;
        margin-top: 10px;
      }
    }
  }
`
