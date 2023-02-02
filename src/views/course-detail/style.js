import styled from 'styled-components'
import courseInfobg from '@/assets/images/courseInfobg.png'
export default styled.div`
  width: 100%;
  background: #f8fafc;
  .courseInfoTop {
    width: 100%;
    height: 200px;
    background: no-repeat center center;
    background-image: url(${courseInfobg});
    .info-container {
      margin: 0 auto;
      width: 1140px;
      height: 200px;
      color: #ffffff;
      z-index: 5;
      .route {
        padding-top: 20px;
        display: flex;
        font-size: 14px;
        a,
        span {
          color: #fff;
        }
        .route-item {
          margin-right: 10px;
        }
      }
      .name {
        display: flex;
        margin: 30px 0 10px 0px;
        font-size: 24px;
      }
      .info {
        display: flex;
        .Avat {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .teacherName {
          margin: 8px 0 0 8px;
          .name-item img {
            width: 14px;
            height: 14px;
            margin-left: 10px;
          }
        }
        .access {
          margin: 0 0 0 100px;
          display: flex;
          .access-item {
            margin-right: 10px;
            line-height: 60px;
          }
        }
      }
    }
  }
  .info-nav {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 3px 6px rgb(0 0 0 / 16%);
    .nav {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
    }
    .nav-tabs {
      border-bottom: none;
      .chapter-item {
        padding-bottom: 8px;
        font-size: 20px;
        font-weight: bold;
        line-height: 80px;
        margin-right: 70px;
        cursor: pointer;
        position: relative;
        .nav-link {
          margin-bottom: -1px;
          padding: 0.5rem 1rem;
          &.active {
            position: relative;
            display: block !important;
            color: #388fff !important;
            &:after {
              position: absolute;
              left: 20%;
              bottom: 20px;
              content: '';
              width: 60%;
              height: 6px;
              background: #388fff;
              border-radius: 3px;
            }
          }
        }
      }
    }
  }
  .course-main {
    margin: 0 auto;
    padding: 40px 0;
    border: none;
    > div {
      display: none;
      &.active {
        display: block;
      }
    }
    .course-chapter {
      min-width: 1140px;
      min-height: 500px;
      .introduction {
        background: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0px 3px 6px rgb(0 0 0 / 9%);
        .desc {
          padding: 20px;
          color: #474747;
          line-height: 35px;
        }
        .buy-btn-container {
          float: right;
          margin-top: 10px;
          padding: 0 20px 20px;
          width: 300px;
          display: flex;
          .btn-item {
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            padding: 0px;
            border: 0px;
            outline: none;
            color: #fff;
            border-radius: 23px;
            cursor: pointer;
            margin-left: 10px;
            &.buy {
              background-color: #dc3545;
              &:hover {
                color: #fff;
                background-color: #c82333;
                border-color: #bd2130;
              }
            }
            &.cart {
              background-color: #6c757d;
              &:hover {
                color: #fff;
                background-color: #5a6268;
                border-color: #545b62;
              }
            }
          }
        }
      }
      .video {
        margin: 20px 0;
        padding: 20px;
        background: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0px 3px 6px rgb(0 0 0 / 9%);
        .chapterName {
          font-weight: bold;
          font-size: 20px;
          color: #333333;
        }
        .chapterDesc {
          margin: 10px 0;
          font-size: 13px;
          color: #5c5c5c;
        }
        .video-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40px;
          line-height: 30px;
          padding: 5px 0;
          margin: 0 0 10px 0;
          border-radius: 8px;
          &:hover {
            cursor: pointer;
            background: rgba(53, 133, 255, 0.2);
            border-radius: 8px;
            margin-top: 5px;
            color: #388fff !important;
          }
          .video-item-left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .video-itemIcon {
              padding-left: 10px;
            }
            .item-name {
              width: 900px;
              padding-left: 10px;
              .shipin {
                color: #333333;
                font-weight: bold;
              }
              .chapterName {
                font-size: 16px;
                font-weight: 400;
                color: #333333;
              }
            }
          }
          .video-item-right {
            margin: 0 5px 0 0;
            width: 80px;
            height: 30px;
            line-height: 30px;
            border: 0px;
            outline: none;
            color: #fff;
            background: #388fff;
            border-radius: 12px;
            cursor: pointer;
            font-size: 14px;
            text-align: center;
          }
        }
      }
    }
  }
  .course-attachment {
    min-width: 1140px;
    min-height: 500px;
    .down {
      margin: 10px auto !important;
      padding: 5px;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 3px 6px rgb(0 0 0 / 9%);
      .source {
        margin: 2px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 40px;
        .source-left {
          cursor: pointer;
          img {
            margin: 0 5px;
            width: 20px;
            height: 20px;
          }
        }
        .source-right {
          width: 100px;
          height: 33px;
          line-height: 33px;
          border: none;
          border-radius: 8px;
          margin: 5px 0;
          font-size: 14px;
          text-align: center;
          color: #fff;
          cursor: pointer;
          background-color: #007bff;
        }
      }
    }
    .empty-resource {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 40px;
      color: #999999;
      margin: 100px auto;
      img {
        width: 250px;
      }
    }
  }
`
