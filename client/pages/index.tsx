import React, { useState, useEffect   } from 'react'

type Song = {
  id: number;
  title: string;
  content: string;
}

function index() {

  const [message, setMessage] = useState("Loading...");
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    fetch('http://localhost:8080/api/home/')
      .then(response => response.json())
      .then(data => {
        console.log(data.blog) 
        setMessage(data.message)
        setSongs(data.blog)
      }
    )
  }, []);

  return (
    <div>
      <h3>{message}</h3>
      <h2>Tool</h2>
      <div>
        {songs?.map(song => (
          <ul key={song?.id}>
            <li>{song?.title}</li>
            <li>{song?.content}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default index
