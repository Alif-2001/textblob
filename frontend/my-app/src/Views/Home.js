import React, { useState } from 'react';
import SentimentViewer from '../Components/SentimentViewer';
import SentimentAPI from '../Services/SentimentAPI';

export default function Home() {

    const [input, setInput] = useState("");
    const [sentimentData, setSentimentData] = useState({});

    const submitInput = () => {
        SentimentAPI
            .getSentiment(input)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => {
                setSentimentData(data);
            })
    }

    return (
        <div>
            <h1>Sentiment Analysis</h1>
            <label>
                Your Text:
                <br />
                <textarea rows={4} cols={30} name="input" value={input} onChange={(e) => { setInput(e.target.value) }}></textarea>
            </label>
            <br />
            <input type="submit" value="Submit" onClick={submitInput} />
            <div>
                {
                    JSON.stringify(sentimentData) === '{}' ?
                        <div />
                        :
                        <SentimentViewer data={sentimentData} />
                }
            </div>
        </div>
    );
}