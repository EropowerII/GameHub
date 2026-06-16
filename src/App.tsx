import { useMemo, useState } from "react";
import { games, subjects, type Game, type SubjectFilter } from "./games";

function App() {
  const [activeSubject, setActiveSubject] = useState<SubjectFilter>("All");

  const filteredGames = useMemo(() => {
    if (activeSubject === "All") {
      return games;
    }

    return games.filter((game) => game.subject === activeSubject);
  }, [activeSubject]);

  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">Mini-game library</p>
          <h1 id="page-title">Educational Mini-Game Hub</h1>
          <p className="hero-text">
            Choose a playful practice game, jump in quickly, and keep the learning session focused.
          </p>
        </div>

        <div className="hero-scene" aria-hidden="true">
          <div className="planet planet-one" />
          <div className="planet planet-two" />
          <div className="book">
            <span />
            <span />
          </div>
          <div className="spark spark-one" />
          <div className="spark spark-two" />
          <div className="pencil" />
        </div>
      </section>

      <section className="toolbar" aria-label="Filter games by subject">
        <div>
          <p className="toolbar-label">Subject</p>
          <div className="filter-group" role="list">
            {subjects.map((subject) => (
              <button
                className={subject === activeSubject ? "filter is-active" : "filter"}
                key={subject}
                type="button"
                onClick={() => setActiveSubject(subject)}
                aria-pressed={subject === activeSubject}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>
        <p className="result-count">
          {filteredGames.length} {filteredGames.length === 1 ? "game" : "games"}
        </p>
      </section>

      <section className="game-grid" aria-label="Available games">
        {filteredGames.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </section>
    </main>
  );
}

function GameCard({ game }: { game: Game }) {
  return (
    <article className={`game-card accent-${game.accent}`}>
      <div className="card-art" aria-hidden="true">
        <span className="orb orb-large" />
        <span className="orb orb-small" />
        <span className="card-symbol">{game.subject === "Math" ? "123" : "ABC"}</span>
      </div>

      <div className="card-content">
        <div className="card-header">
          <div>
            <p className="subject">{game.subject}</p>
            <h2>{game.title}</h2>
          </div>
          <span className="difficulty">{game.difficulty}</span>
        </div>

        <dl className="meta-list">
          <div>
            <dt>Skill</dt>
            <dd>{game.skill}</dd>
          </div>
        </dl>

        <p className="description">{game.description}</p>

        <a className="play-button" href={game.playUrl} target="_blank" rel="noreferrer">
          Play
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </article>
  );
}

export default App;
