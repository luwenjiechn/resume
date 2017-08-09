import React from 'react'
import styled from 'styled-components'

const StyledProgressContainer = styled.div`
    margin: 10px 0;
`

const StyledProgressBackground = styled.div`
    height: 10px;
    background: #212e3a
`

const StyledProcessTitle = styled.div`
    margin-bottom: 10px;
`

const StyledProgress = styled.div`
    width: ${props => props.value}%;
    height: inherit;
    background: #7cc3a7;
`

const Progress = ({title = null, value = 0}) => {
    return (
        <StyledProgressContainer>
            {title && <StyledProcessTitle>{title}</StyledProcessTitle>}
            <StyledProgressBackground>
                <StyledProgress value={value} />
            </StyledProgressBackground>
        </StyledProgressContainer>
    )
}

export default Progress