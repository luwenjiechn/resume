import React from 'react'
import styled from 'styled-components'

const StyledBlock = styled.div`
    margin: 24px 0;
`

const StyledTitle = styled.div`
    padding-left: 24px;
    border-left: 6px solid ${props => props.ribbon ? props.ribbon : "rgba(0,0,0,0)"};
    font-size: 20px;
`

const StyledContent = styled.div`
    padding: 10px 30px 20px 30px;
    font-size: 14px;
`

const Block = ({ title = null, children, ribbon = null, style }) => {
    return (
        <StyledBlock>
            <StyledTitle ribbon={ribbon}>
                {title}
            </StyledTitle>
            <StyledContent style={style}>
                {children}
            </StyledContent >
        </StyledBlock>
    )
}

export default Block

