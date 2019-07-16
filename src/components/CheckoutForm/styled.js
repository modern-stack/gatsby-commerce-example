import styled from 'styled-components'

const Checkout = styled.div`
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 4px;
  justify-content: space-between;
  margin: 20px 40px;

  > div {
    width: 100%;
    margin: 0 40px;
  }

  .summary {
  }
`

const Subtitle = styled.div`
  text-transform: uppercase;
  padding-bottom: 4px;
  border-bottom: 1px gray solid;
  color: gray;
  font-size: 0.8em;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
`

export { Checkout, Content, Subtitle }
