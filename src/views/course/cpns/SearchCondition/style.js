import styled from 'styled-components'
export default styled.div`
  background: #f3f5f9;
  padding: 30px 0;
  .classify {
    background: #f3f5f9;
    border-radius: 8px;
    padding: 10px;
    .cation-middle {
      line-height: 48px;
      font-size: 14px;
      .cation-list {
        overflow: hidden;
        dt {
          float: left;
          width: 90px;
          font-weight: 700;
          line-height: 48px;
          position: relative;
          color: #333;
          &:after {
            content: '';
            position: absolute;
            right: 12px;
            top: 22px;
            border: 1px solid #333;
            border-width: 0 1px 1px 0;
            width: 4px;
            height: 4px;
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }
        }
        dd.course-where {
          border-bottom: 1px dotted #e0e0e0;
          margin-left: 64px;
          overflow: hidden;
          span {
            font-size: 14px;
            line-height: 25px;
            height: 25px;
            float: left;
            padding: 0 10px;
            margin: 10px 5px;
            cursor: pointer;
            user-select: none;
            &:hover {
              color: #388fff;
              text-decoration: none;
              background: rgba(44, 128, 255, 0.1);
              border-radius: 5px;
            }
          }
          span.active {
            color: #388fff;
            text-decoration: none;
            background: rgba(44, 128, 255, 0.1);
            border-radius: 5px;
          }
        }
      }
    }
  }
`
