const React = require('react');
const Layout = require('../Layout');

module.exports = function Entries({ entries }) {
  return (
    <Layout>
      <h1>Upcoming Karaoke Artists</h1>

      <main role="main">
        <ul className="entries">
          {entries.map((entry) => (
            <li className="entry" key={entry.id}>
              <span className="singer">{entry.singer}</span>
              <span className="song-title">{entry.songTitle}</span>
              <ul className="entry-links">
                <li className="entry-link"><a href={`show-one-entry/${entry.id}`}>details</a></li>
                <li className="entry-link" id={entry.id} name="edit">edit</li>
                <li className="entry-link" id={entry.id} name="delete">delete</li>
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};
