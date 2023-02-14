import React from 'react';

export default function History(props) {
    if(!props) {
        return (<div></div>)
    }

    const generateList = (items) => {
        const rows = []
        items.forEach(element => {
            rows.push(
                <li>{element.content}</li>
            )
        });
        return rows;
    }

    return(
        <div>
            <h1>History</h1>
            <div>
                {props.data.length > 0 ?
                    <ul>
                        {generateList(props.data)}
                    </ul>
                    :
                    <h5>No History found</h5>
                }             
            </div>
        </div>
    );
}
