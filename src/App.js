import React, { useState, useEffect } from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Message from './Message'

import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      username: 'Hlela',
      text: 'Where my homies at',
      username: 'Lola',
      text: 'He said-',
    },
  ])
  const [username, setUsername] = useState('')

  const sendMessage = (event) => {
    // all the logic to send a message goes here
    event.preventDefault()
    setMessages([...messages, { username: username, text: input }])
    setInput('')
  }

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

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  )
}

export default App
