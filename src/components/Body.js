import styled from 'styled-components'
const Body = styled.div`
    display:flex;
`
const Left = styled.div`
    flex: 4;
    background: #2b3b4b;
    color: #fff
`
const Right = styled.div`
    flex: 6;
    background: #fff
`

Body.Left = Left
Body.Right = Right
export default Body