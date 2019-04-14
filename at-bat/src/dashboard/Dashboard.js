import React from 'react';

const Dashboard = props => {
    return(
        <div>
            <button data-testid='strike'onClick={props.onStrike}>Strike</button>
            <button data-testid='ball'onClick={props.onBall}>Ball</button>
            <button data-testid='foul'onClick={props.onFoul}>Foul</button>
            <button data-testid='hit'onClick={props.onHit}>Hit</button>
        </div>
    )
}

export default Dashboard;