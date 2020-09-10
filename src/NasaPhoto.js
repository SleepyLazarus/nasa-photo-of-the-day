import React, { useState, useEffect } from 'react'






export default function NasaPhoto(props) {
    const {title, date, hdurl, alt, explanation, copyright } = props.data 
    
    return (
        <div>
            <img className='img' src={hdurl} alt={alt}></img>
            <h4> {copyright} {date} </h4>
            <h1> {title} </h1>
            <h2> {explanation} </h2>
        </div>
    )
}
