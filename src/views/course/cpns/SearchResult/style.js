import styled from 'styled-components'
export default styled.div`
  .course-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .sortby {
      display: flex;
      padding: 20px 0 0 0;
      font-size: 14px;
      color: #515759;
      li {
        padding: 0 10px;
        cursor: pointer;
        &.active,
        &:hover {
          color: #388fff;
        }
        &:nth-last-child(1) {
          display: none;
        }
      }
    }
    .right {
      display: flex;
      padding: 20px 0 0 0;
      font-size: 14px;
      color: #515759;
      text-align: center;
    }
  }
  .xl-main {
    margin-top: 20px;
    min-height: 400px;
    .course-content {
      width: 100%;
      min-height: 275px;
      margin-top: 20px;
      display: flex;
      .course-empty {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        img {
          width: 250px;
          user-select: none;
        }
        span {
          margin-top: 20px;
          color: #f00;
          font-weight: 800;
        }
      }
      .content-ul {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        .content-li {
          margin-right: 20px;
          &:nth-child(4n) {
            margin-right: 0;
          }
        }
      }
    }
  }
  .xl-pager {
    margin: 30px auto 70px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`
