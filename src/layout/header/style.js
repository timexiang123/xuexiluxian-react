import styled from 'styled-components'
export const HeaderWrapper = styled.div`
  min-width: 1140px;
  background: #fff;
  box-shadow: 0 5px 6px rgb(0 0 0 / 16%);
  position: relative;
  z-index: 10;
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: cemter;
    height: 100px;
    color: gray;
    font-size: 16px;
    max-width: 1140px;
    .header-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .header-nav {
        display: flex;
        align-items: center;
        height: 100%;
        margin-left: 30px;
        a {
          width: 50px;
          height: 100px;
          line-height: 100px;
          margin: 0 15px;
          text-align: center;
          border-bottom: 4px solid transparent;
        }
        .active {
          font-weight: 800;
          color: ${(props) => props.theme.color.primaryColor};
          border-color: var(--primary-color);
        }
      }
    }
    .header-right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .header-search {
        width: 200px;
        margin-right: 50px;
        float: right;
        padding: 30px 0;
        position: relative;
        input {
          position: relative;
          padding: 0 40px 0 10px;
          width: 200px;
          height: 40px;
          border: 0;
          border-radius: 8px;
          color: #333333;
          background: #f0f2f4;
          font-size: 14px;
          outline: none;
        }
        .search-div {
          position: absolute;
          top: 32px;
          right: 10px;
          width: 20px;
          height: 20px;
          cursor: pointer;
          i{
            font-size:24px;
          }
        }
      }
    }
  }
`
