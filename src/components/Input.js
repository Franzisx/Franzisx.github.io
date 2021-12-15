const Input = ({showResults}) => {

    return (
      <section>

        <div className="import">
          <h4>Input</h4>
          <div className="block__flex">
            <input type="text" placeholder="Enter a URL, ISBN, DOI, PMID, arXiv ID, or title"/>
            <button className="btn btn--add" onClick={showResults} type="button" name="button">add</button>
          </div>
        </div>

      </section>
    )
}

export default Input
