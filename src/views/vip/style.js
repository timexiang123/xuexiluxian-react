import styled from 'styled-components'
export default styled.div`
  .bg-image {
    width: 100%;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .member-container {
    margin-bottom: 50px;
    .title {
      text-align: center;
      height: 40px;
      line-height: 40px;
      color: ${(props) => props.theme.color.primaryColor};
      font-size: 32px;
      font-weight: bold;
      margin: 35px auto;
      letter-spacing: 10px;
    }
    .row {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
      .col-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        &:nth-child(1) {
          .ant-btn-primary {
            background-color: #6c757d;
          }
        }
        &:nth-child(2) {
          .item-normal-experience {
            background: #fff;
            .item-price {
              color: #dc985e;
            }
          }
        }
        &:nth-child(3) {
          .item-normal-experience {
            background: #0d0d0d;
            .item-title-title {
              color: #fff !important;
            }
            .item-desc {
              color: #fff;
            }
            .item-price {
              color: #fff;
            }
            .item-list {
              li {
                color: #fff;
              }
            }
          }
        }
        .item-normal-experience {
          padding: 10px;
          height: 470px px;
          background: rgb(247, 248, 250);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 0 10px rgb(0 0 0 / 30%);
          box-sizing: border-box;
          .item-title {
            display: flex;
            align-items: center;
            width: 100%;
            height: 28px;
            position: relative;
            .item-title-img img {
              width: 26px;
              height: 26px;
            }
            .item-title-title {
              margin-left: 10px;
              font-size: 22px;
              font-weight: bold;
              color: rgb(51, 51, 51);
            }
            .title-tuijian {
              position: absolute;
              top: -23px;
              right: -33px;
              width: 130px;
              height: 130px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .item-desc {
            width: 100%;
            height: 18px;
            margin-top: 15px;
            font-size: 14px;
            color: #999999;
          }
          .item-price {
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            height: 59px;
            margin-top: 25px;
            color: #999999;
            .item-price-num {
              font-size: 38px;
              font-weight: 700;
              line-height: 34px;
            }
          }
          .item-start-box {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100px;
            border-bottom: #e2e2e2 1px solid;
            .ant-btn-primary {
              width: 100%;
              height: 40px;
            }
          }
          .item-list {
            padding: 10px 0;
            width: 100%;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            color: #666666;
            li {
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              cursor: pointer;
              &:nth-child(1) {
                color: #dc985e;
              }
              .item-list-r {
                width: 24px;
                height: 24px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
`
