import React from 'react'
import styled from 'styled-components'
import {AppContext} from '../App/AppProvider'

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: white;
    background-color: green;
    cursor: pointer;
    padding: 5px;
    border-radius: 5%
`

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

export default function (){
    return (
        <CenterDiv>
        <AppContext.Consumer>
            {({confirmFavorites}) => 
                <ConfirmButtonStyled onClick={confirmFavorites}>
                    confirm favorites
                </ConfirmButtonStyled>}
        </AppContext.Consumer>
        </CenterDiv>
    )
}