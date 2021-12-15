const BookSingleAuthor = () => {
    return (
    <div className="block__flex-col output-item">
      <span className="icon-type icon--book"></span>
      <p className="output-1">
        <i>Steffen, Dagmar: </i>
        <span className="title">Design als Produktsprache. Der „Offenbacher Ansatz“ in Theorie und Praxis</span>,
      Frankfurt a. M. 2000.</p>
      <button className="btn btn--rounded btn--primary">copy</button>
    </div>
    )
}

export default BookSingleAuthor


// <div className="template">
// {props.creators.lastName} ,
// {props.creators.firstName} :
// {props.publicationTitle} ,
// {props.place} {props.date} ,
// {props.SEITENANGABE} .
// </div>
