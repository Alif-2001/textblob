import React from 'react';

export default function SentimentViewer(props) {
    if (!props) {
        return (<div></div>)
    }

    const generateList = (items) => {
        const rows = []
        items.forEach(element => {
            rows.push(
                <li>{element}</li>
            )
        });
        return rows;
    }

    return (
        <div>
            <h3>Score</h3>
            {props.data.score}
            <h3>Comparative</h3>
            {props.data.comparative}
            <h3>Positive Words</h3>
            {props.data.positive.length > 0 ?
                <ul>
                    {generateList(props.data.positive)}
                </ul>
                :
                <h5>No positive words</h5>
            }
            <h3>Negative Words</h3>
            {props.data.negative.length > 0 ?
                <ul>
                    {generateList(props.data.negative)}
                </ul>
                :
                <h5>No negative words</h5>
            }
        </div>
    )
}