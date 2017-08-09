import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledTag = styled.div`
    display: inline-block;
    padding: 3px 8px;
    background: #374046;
    border-radius: 5px;
    text-align: center;
    position: relative;
    margin-bottom: 5px;
    &:after{
        content:'';
        position:absolute;
        left: 0;right: 0;
        margin: auto;
        top: 100%;
        margin: auto;
        width:0;
        height:0;
        border:7px solid ;
        border-color:#374046 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);
    }
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IM = ({children}) => {
    return (
        <StyledContainer>
            <StyledTag>
                <span>I'm</span>
            </StyledTag>
            <StyledContent>
                {children}
            </StyledContent>
        </StyledContainer>
    )
}

export default IM;