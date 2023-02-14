import React from 'react';

export default function SentimentViewer(props) {
    if (!props) {
        return (<div></div>)
    }
    console.log(props);
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
            <div role="score">
                {props.data.score}
            </div>
            <h3>Comparative</h3>
            <div role="comparative">
                {props.data.comparative}
            </div>
            <h3>Positive Words</h3>
            <div role="positive-words">
                {props.data.positive.length > 0 ?
                    <ul>
                        {generateList(props.data.positive)}
                    </ul>
                    :
                    <h5>No positive words</h5>
                }
            </div>
            <h3>Negative Words</h3>
            <div role="negative-words">
                {props.data.negative.length > 0 ?
                    <ul>
                        {generateList(props.data.negative)}
                    </ul>
                    :
                    <h5>No negative words</h5>
                }
            </div>
        </div>
    )
}