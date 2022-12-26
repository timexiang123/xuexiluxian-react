import styled from 'styled-components'

const CourseCard = styled.li`
  position: relative;
  width: 270px;
  height: 275px;
  /* background: palevioletred; */
  margin-bottom: 20px;
  box-shadow: 1px 1px 10px rgb(27 39 94 / 40%);
  border-radius: 8px;
  transition: margin-top 0.2s;
  -webkit-transition: margin-top 0.2s;
  overflow: hidden;
  &:hover {
    margin-top: -5px;
  }
  .li-top {
    position: relative;
    height: 165px;
    .li-img,
    .li-img img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .vip-icon img {
      position: absolute;
      right: 8px;
      top: 8px;
    }
  }
  .li-bottom {
    padding: 10px;
    .li-name {
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        color: var(--primaryColor);
      }
    }
    .li-desc {
      font-size: 12px;
      color: #808080;
      padding: 10px 0;
      .dot {
        padding: 0 4px;
      }
    }
    .li-sale-price {
      display: flex;
      align-items: center;
      .memberfree {
        padding: 4px 12px;
        height: 24px;
        margin-right: 12px;
        color: #fff;
        font-size: 12px;
        background: linear-gradient(90deg, #ff928e, #fe7062 99%);
        border-radius: 24px 0 24px 0;
      }
      .memberprice {
        color: #fe7062;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
`
export default CourseCard
