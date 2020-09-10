import React, { useState, useEffect } from 'react'
import "./App.css";
import NasaPhoto from './NasaPhoto'
import axios from 'axios'

const apiKey = 'api_key=0T2bXI1N0b7ZI6ITZeROpfvCU5WlFQ5K594o7jOD'
const nasaURL = 'https://api.nasa.gov/planetary/apod?'
axios.get(`${nasaURL}${apiKey}`)

function App() {

  const [data, setData] = useState([]);
    
  useEffect(() => {
      axios.get(`${nasaURL}${apiKey}`)
      .then((response => {
        setData(response.data)
      }))
      .catch(( err => {
  
      }))
    }, [])

    console.log(data)

  return (
    <div className="App">
      <NasaPhoto data={data}/>
      <h1>Today's Image from NASA</h1>
    </div>
  );
}

export default App;
