import React from 'react'

const PlayerList = (props) => {
    const {teamPlayer} = props

    const displayTeam = teamPlayer.map((player, index) => {
        return (
            <div key={index}>
                <p>{player.name} {player.email} {player.role}</p>
            </div>
        )
    })

    return (
        <>
            <h3>Team Players</h3>
            <p>Name - Email - Role</p>
            {displayTeam}
        </>
    )
}

export default PlayerList