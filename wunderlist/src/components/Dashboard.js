import React from 'react';
import styled from 'styled-components'

const StyledDashboard = styled.div`
    /* Block */
    width: 80%;
    margin: 5% auto;
    padding: 3%;
    /* Style */
    border-radius: 10px;

    .column-container {
        margin-top: 3%;
        display: flex;
        justify-content: space-around;

        .column { 
            width: 45%;
            padding: 2%;
            border-radius: 10px;
            border: 2px solid #0E7C7B;

            h3 {
                font-size: 1.3rem;
                font-weight: 700;
            }
        }
    }
`

function Dashboard(props){
    return(
        <StyledDashboard>
            <h2>Dashboard</h2>
            <div className='column-container'>
                <div className='column'>
                    <h3>Today's Todos</h3>
                </div>
                <div className='column'>
                    <h3>Upcoming Todos</h3>
                </div>
            </div>
        </StyledDashboard>
    )
}

export default Dashboard