import { SentimentAPIUrls } from '../Constants/APIFields.js';

async function getSentiment(input) {
    try {
        const response = await fetch(SentimentAPIUrls.Sentiment_API, {
            method: 'POST',
            body: JSON.stringify({
                "input": input
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        return await response;
    } catch (error) {
        console.log(error);
    }
}

async function getHistory(count) {
    try {
        const response = await fetch(SentimentAPIUrls.History_API, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "count": count,
            }
        });
        return await response;
    } catch (error) {
        console.log(error);
    }
}

const SentimentAPI = {
    getSentiment,
    getHistory
}

export default SentimentAPI;
