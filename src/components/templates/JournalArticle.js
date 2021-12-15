const JournalArticle = () => {
    return (
      <div className="block__flex-col output-item">
        <span className="icon-type icon--book"></span>
        <p className="output-1"><i>Blei, Franz: </i>
        <span className="title">Reklame für Frauen</span>. In: <span className="journalTitle">Gebrauchsgraphik</span> (Berlin),
        <span className="vol"> 6. Jg., </span>
        <span className="date">Januar 1929, </span>
        <span className="issue">Nr. 1, </span>
        <span className="pages">S. 41-42.</span>
        </p>
        <button className="btn--rounded">copy</button>
      </div>
    )
}

export default JournalArticle
