const Essay = () => {
    return (
      <div className="block__flex-col output-item">
        <span className="icon-type icon--book"></span>
        <p className="output-1"><i>Burckhardt, Lucius</i>:
        <span className="title"> Design ist unsichtbar</span>, in: <i>Ders.: </i>
        <span className="title">Die Kinder fressen ihre Revolution. Wohnen – Planen – Grünen</span>
        <i> hrsg. v. Bazon Brock.</i> Köln 1985.</p>
        <button className="btn--rounded btn--primary">copy</button>
      </div>
    )
}

export default Essay
