import styled from 'styled-components'

const contentTitle = styled.h2`
  display: flex;
  .content-title-left {
    display: flex;
    .hot {
      display: flex;
      height: 38px;
      .hot-left {
        height: 38px;
        font-size: 20px;
        padding: 0 10px;
        text-align: center;
        line-height: 37px;
        color: #ffffff;
        border-radius: 8px 0 8px 8px;
        background: linear-gradient(90deg, #ff727f 0%, #fc685c 100%);
      }
      .hot-right {
        width: 0;
        height: 0;
        border: 6px solid #fc685c;
        border-right-color: transparent;
        border-bottom-color: transparent;
      }
    }
    .txt {
      position: relative;
      height: 38px;
      z-index: 50;
      .txt-top {
        font-size: 24px;
        padding: 0 5px;
        color: #333333;
        line-height: 31px;
      }
      .txt-bottom {
        position: absolute;
        top: 25px;
        left: 0px;
        width: 100%;
        height: 13px;
        background: linear-gradient(90deg, #fbf84f 0%, #fea935 100%);
        border-radius: 7px;
        z-index: -1;
      }
    }
  }
`
export default contentTitle
