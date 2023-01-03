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
`
