import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import SentimentViewer from './Components/SentimentViewer';

test('renders Home page', () => {
  render(<App />);
  const title = screen.getByText(/Sentiment Analysis/i);
  const textBox = screen.getByLabelText(/Your Text:/i);
  const submitButton = screen.getByRole('button');
  expect(title).toBeInTheDocument();
  expect(textBox).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toBeEnabled();
  expect(screen.queryByRole('sentiment-viewer')).not.toBeInTheDocument();
});

test('Sentiment Viewer', () => {
  render(<SentimentViewer data={{
      score: 0,
      comparative: 1.3,
      positive: ["nice", "pretty"],
      negative: ["wrong", "not"]
    }
  }/>)

  expect(screen.getByText(/Score/i)).toBeInTheDocument();
  expect(screen.getByRole('score')).toHaveTextContent(0);
  expect(screen.getByText(/Comparative/i)).toBeInTheDocument();
  expect(screen.getByRole('comparative')).toHaveTextContent(1.3);
  expect(screen.getByText(/Positive Words/i)).toBeInTheDocument();
  expect(screen.getByRole('positive-words')).toMatchInlineSnapshot(`
      <div
        role="positive-words"
      >
        <ul>
          <li>
            nice
          </li>
          <li>
            pretty
          </li>
        </ul>
      </div>
  `)
  expect(screen.getByText(/Negative Words/i)).toBeInTheDocument();
  expect(screen.getByRole('negative-words')).toMatchInlineSnapshot(`
    <div
      role="negative-words"
    >
      <ul>
        <li>
          wrong
        </li>
        <li>
          not
        </li>
      </ul>
    </div>
  `)
});
