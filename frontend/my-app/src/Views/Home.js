import React, { useEffect, useState } from 'react';
import History from '../Components/History';
import SentimentViewer from '../Components/SentimentViewer';
import SentimentAPI from '../Services/SentimentAPI';

export default function Home() {

    const [input, setInput] = useState("");
    const [sentimentData, setSentimentData] = useState({});
    const [historyData, setHistoryData] = useState({});

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

    useEffect(() => {
        SentimentAPI
            .getHistory(3)
            .then(res => {
                if(res.ok) {
                    return res.json();
                }
            })
            .then(data => {
                setHistoryData(data);
            })
        }, [sentimentData])

    

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
            <br />
            <div className='row'>
                <div className='col'>
                    {
                        JSON.stringify(sentimentData) === '{}' ?
                            <div />
                            :
                            <div role="sentiment-viewer">
                                <SentimentViewer data={sentimentData} />
                            </div>
                    }
                </div>
                <div className='col'>
                    <History data={historyData} />
                </div>
            </div>   
        </div>
    );
}