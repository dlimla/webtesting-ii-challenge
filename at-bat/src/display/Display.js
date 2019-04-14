import React from 'react';

function Display(props) {
    const { balls, strikes, } = props
    return(
        <>
            <h2>Batter Count</h2>
            <h3>At Bat: </h3>
            <h2 data-testid='strikes'>Strikes:{strikes}</h2>
            <h2 data-testid='balls'>Balls: {balls}</h2>

        </>
    )
}

export default Display;