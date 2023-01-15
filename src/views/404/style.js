import styled from 'styled-components'
export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #efefef;
  height: ${(props) => props.height}px;
  h2 {
    font-size: 150px;
    font-weight: 800;
    color: ${(props) => props.theme.color.primaryColor};
    margin-bottom:50px;
  }
`
