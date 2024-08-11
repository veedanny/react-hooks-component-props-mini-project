import React from 'react';

const Article = ({ title, date, preview, minutesToRead }) => {
  const defaultDate = 'January 1, 1970';

  const renderReadingTime = (minutes) => {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return '☕️'.repeat(cups) + ` ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return '🍱'.repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      <p>{renderReadingTime(minutesToRead)}</p>
    </article>
  );
};

export default Article;
