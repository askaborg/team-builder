import React, { useState } from 'react'
import './App.css'

import Form from './team/Form'
import PlayerList from './team/PlayerList'

function App() {
  const[teamPlayer, addTeamPlayer] = useState([])
  const teamUp = teamPlayerList => addTeamPlayer([...teamPlayer, teamPlayerList])

  return (
    <div className="App">
      <Form teamUp={teamUp} />
      <PlayerList teamPlayer={teamPlayer} />
    </div>
  )
}

export default App
