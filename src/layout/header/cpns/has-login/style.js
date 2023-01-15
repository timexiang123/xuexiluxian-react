import styled from 'styled-components'
export default styled.div`
  float: right;
  display: flex;
  text-align: right;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  .dropdown {
    position: relative;
  }
  .member-center {
    height: 100px;
    padding: 20px 0;
    line-height: 60px;
    .head-my-cart {
      float: left;
      margin: 0;
      cursor: pointer;
      i {
        font-size: 22px;
        color: #808080;
      }
    }
    .head-my-course {
      float: left;
      margin: 0 30px;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
      color: #808080;
      a {
        color: #808080;
      }
    }
    .avatar {
      float: left;
      width: 64px;
      height: 64px;
      display: block;
      overflow: hidden;
      cursor: pointer;
    }
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1000;
      display: none;
      float: left;
      min-width: 10rem;
      padding: 0.5rem 0;
      margin: 0.125rem 0 0;
      font-size: 1rem;
      color: #212529;
      text-align: left;
      list-style: none;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 0.25rem;
    }
    .member-center-dropdown {
      right: 0 !important;
      top: 18px !important;
      left: unset !important;
      /* padding: 0 15px 12px; */
      width: 250px;
      border-radius: 8px;
      background-color: #fff;
    }
    .avatar-card {
      transform: translate(40px, 80px) !important;
    }
    .member-center-dropdown {
      width: 320px;
      /* height: 380px; */
      background: #fff;
      box-shadow: 0px 5px 8px #808080;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      .card-info {
        width: 100%;
        height: 100px;
        .info-left-avatar {
          float: left;
          width: 80px;
          height: 80px;
          margin-top: 5px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .info-right-info {
          width: calc(100% - 80px);
          height: 100px;
          /* background: pink; */
          float: left;
          padding: 0 0 0 15px;
          box-sizing: border-box;
          .info-username {
            height: 50px;
            line-height: 60px;
            font-size: 20px;
            font-weight: 400;
            color: #333;
          }
          .info-member {
            height: 50px;
            line-height: 30px;
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 0;
            img {
              width: 24px;
              height: 16px;
              margin-top: -6px;
            }
            .info-member-gr {
              color: #93999f;
              margin-left: 10px;
            }
            .info-member-re {
              color: #f01414;
              margin-left: 10px;
            }
          }
        }
      }
      .card-type {
        width: 100%;
        height: 120px;
        /* background: yellow; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .type-item {
          width: 47%;
          height: 35px;
          background: #f8fafc;
          text-align: center;
          line-height: 35px;
          font-size: 14px;
          cursor: pointer;
          font-weight: 400;
          i {
            color: ${(props) => props.theme.color.primaryColor} !important;
            margin-right: 10px;
          }
          span {
            color: ${(props) => props.theme.color.primaryColor};
          }
        }
      }
      .card-loginout {
        width: 100%;
        height: 35px;
        /* background: green; */
        text-align: right;
        line-height: 45px;
        border-top: 1px solid #e0e0e0;
        font-weight: 400;
        font-size: 14px;
        cursor: pointer;
        a {
          color: #93999f;
        }
      }
    }
    .dropdown-menu {
      display: block;
      padding: 15px;
    }
  }
`
