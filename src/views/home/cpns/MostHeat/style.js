import styled from 'styled-components'

const MostHeatWrapper = styled.div`
  margin-top: 10px;
  .course-content {
    width: 100%;
    height: 100%;
    /* background: red; */
    margin-top: 20px;
    display: flex;
    .content-left {
      width: 278px;
      height: 580px;
      flex-shrink: 0;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content-ul {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }
`
export default MostHeatWrapper
