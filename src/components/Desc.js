import React from 'react';
import styled from 'styled-components'

const StyledDescContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`

const StyledLeft = styled.div`
    width: 30%
`

const StyledDate = styled.div`
    font-weight: 700;
    border-bottom: 1px solid #969595;
`

const StyledRight = styled.div`
    width: ${props => props.date ? "60%" : "90%"}
`

const StyledTitle = styled.div`
    font-weight: 700
`

const StyledSubtitle = styled.div`
    color: #92cbb3;
    margin: 10px 0 ;
`

const StyledContent = styled.div`
    color: #a39b9c
`

const Desc = ({date = null, title = null, subtitle = null, children}) => {
    return (
        <StyledDescContainer>
            {
                date
                &&
                <StyledLeft>
                    <StyledDate>{date}</StyledDate>
                </StyledLeft>
            }
            <StyledRight date={date} >
                <StyledTitle>{title}</StyledTitle>
                <StyledSubtitle>{subtitle}</StyledSubtitle>
                <StyledContent>{children}</StyledContent>
            </StyledRight>
        </StyledDescContainer>
    );
};

export default Desc;