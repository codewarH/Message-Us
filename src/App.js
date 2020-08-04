import React, { useState, useEffect } from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'

import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  const sendMessage = (event) => {
    // all the logic to send a message goes here
    event.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('')
  }

  useEffect(() => {
    // runs once when the app component loads aka a listener
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()))
      })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, []) //condition

  return (
    <div className="App">
      <h1> Hello {username}</h1>
      <form>
        <FormControl>
          <InputLabel> Enter a message ...</InputLabel>
          <Input
            value={input}
            onChange={(event) => {
              setInput(event.target.value)
            }}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map((message) => (
          <Message username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  )
}

export default App
