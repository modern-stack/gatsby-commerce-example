import styled from 'styled-components'

const Button = styled.button`
  color: white;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border: none;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }

  :active {
    transform: translateY(4px);
    border: none;
  }
`
const Primary = styled(Button)`
  background: #c7002b;
`

const Secondary = styled(Button)`
  background: black;
`

export { Primary, Secondary }
