import React from 'react'
import styled from 'styled-components'

const StyledHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #7cc3a7;
    color: #fff;
    padding:36px 0;
`

const StyledLeft = styled.div`
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
`

const StyledRight = styled.div`
    flex: 6;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Head = ({left = null, right = null}) => {
    return (
        <StyledHead>
            <StyledLeft>{left}</StyledLeft>
            <StyledRight>{right}</StyledRight>
        </StyledHead>
    )
}

export default Head