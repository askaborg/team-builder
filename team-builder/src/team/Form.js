import React, { useState } from 'react'

const Form = (props) => {
    const {teamUp} = props
    const [player, addPlayer] = useState({name: "", email: "", role: ""})

    const submitPlayer = newbie => {
        newbie.preventDefault()
        teamUp(player)
        addPlayer({ name: "", email: "", role: "" })
    }
    
    const updatePlayer = update => 
        addPlayer({...player, [update.target.name]: update.target.value})

    return(
        <>
            <br></br>
            <form onSubmit={submitPlayer}>
                <label>
                    Name:
                    <input type="text" name="name" value={player.name} onChange={updatePlayer} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={player.email} onChange={updatePlayer} />
                </label>
                <label>
                    Role:
                    <input type = "text" name = "role" value = {player.role} onChange={updatePlayer} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Form