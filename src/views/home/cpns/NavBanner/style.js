import styled from 'styled-components'
export const NavWrapper = styled.div`
  .nav-banner {
    width: 100%;
    padding: 0 0 30px 0;
    margin-bottom: 30px;
    .banner-top {
      display: flex;
      height: 400px;
      border-radius: 8px 8px 0 0;
      overflow: hidden;
      .banner-left {
        position: relative;
        padding: 10px 0;
        width: 280px;
        height: 100%;
        background-color: #2b283d;
        .first-category {
          display: flex;
          justify-content: space-between;
          aligin-items: center;
          padding: 0 10px;
          height: 40px;
          line-height: 40px;
          overflow: hidden;
          cursor: pointer;
          &:hover {
            background: linear-gradient(90deg, rgb(63, 229, 255), transparent);
          }
          .label {
            font-size: 16px;
            font-weight: 800;
            color: #fff;
          }
        }
      }
      .banner-right {
        width: 860px;
        height: 400px;
      }
    }
    .banner-bottom {
      display: flex;
      height: 100px;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0 55px 25px -25px #d3defb;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border-left: 1px solid #eee;
      border-bottom: 1px solid #eee;
      border-right: 1px solid #eee;
      background: #ffffff;
      .bottom-type {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        .type-left {
          width: 50px;
          height: 50px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .type-right {
          margin-left: 10px;
          .right-title {
            font-size: 18px;
            font-weight: bold;
          }
          .right-desc {
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
`
