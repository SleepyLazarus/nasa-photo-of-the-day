import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Button} from 'reactstrap'




const MamaDiv = styled.div`
    width: 75%;
    text-align: center;
    align-self: center;
`
const PapaDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`
const BabyDiv = styled.div`

`
const NasaImg = styled.img`
    width: 50%;
    height: 100%;
    margin-bottom: 1rem;
    border: 3px solid black;
    border-radius: 15px;
`

const Nh1 = styled.h1`
    font-weight: bold;
    font-size: 2rem;
`

const Nh2 = styled.h2`
    font-size: 1rem;
`

const Np = styled.p`
    font-size: 0.75rem;
`



export default function NasaPhoto(props) {
    const {title, date, hdurl, alt, explanation, copyright } = props.data 
    
    return (
        <PapaDiv>
            <MamaDiv>
                <NasaImg src ={hdurl} alt={alt}></NasaImg>
                <BabyDiv>
                    <Nh1>{title}</Nh1>
                    <Nh2>{copyright} {date}</Nh2>
                    <Np> {explanation} </Np>
                </BabyDiv>
        </MamaDiv>
        </PapaDiv>
    )
}
