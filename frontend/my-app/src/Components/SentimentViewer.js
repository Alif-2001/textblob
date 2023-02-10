import React from 'react';

export default function SentimentViewer(props) {
    if (!props) {
        return (<div></div>)
    }

    return (
        <div>
            <h3>Score</h3>
            {props.data.score}
            <h3>Comparative</h3>
            {props.data.comparative}
        </div>
    )
}