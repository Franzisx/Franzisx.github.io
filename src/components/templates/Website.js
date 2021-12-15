const Website = () => {
    return (
      <div className="block__flex-col output-item example-website">
        <span className="icon-type icon--book"></span>
        <p className="output-1">
          <span className="title">Publish Something Online,</span>
          <i> hrsg. v. Alfred Mustermann </i>
          &lt;<a className="link" href="https://publishsomething.online/" target="blank">
          https://publishsomething.online
          </a>>, 20.11.2021, 21:14 Uhr
        </p>
        <button className="btn--rounded">copy</button>
      </div>
    )
}

export default Website
