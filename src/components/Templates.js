import BookSingleAuthor from './templates/BookSingleAuthor'
import BookTwoAuthors from './templates/BookTwoAuthors'
import BookThreeAuthors from './templates/BookThreeAuthors'
import MultipleAuthors from './templates/MultipleAuthors'
import SingleEditor from './templates/SingleEditor'
import MultipleEditors from './templates/MultipleEditors'
import Website from './templates/Website'
import JournalArticle from './templates/JournalArticle'
import Essay from './templates/Essay'

import data from '../data/data.json'
import {useEffect, useState} from "react"

const Templates = () => {
  const [publication, setPublication] = useState(data[0]);
  const [creatorsCount, setCreatorsCount] = useState(0);
  const [creatorType, setCreatorType] = useState('');

  useEffect( () => {
    setPublication(data[0])
    setCreatorsCount(publication.creators.length)
    setCreatorType(publication.creators[0]?.creatorType)
    }, [publication.creators])

    return (
      <>
        <h3>My Collection | 23.10.2021</h3>
        {(creatorsCount === 1) && <BookSingleAuthor/>}
        {(creatorsCount === 2) && <BookTwoAuthors/>}
        {(creatorsCount === 3) && <BookThreeAuthors/>}
        {(creatorsCount > 3) && <MultipleAuthors/>}
      </>

      // <div>
      //   <BookSingleAuthor/>
      //   <BookTwoAuthors/>
      //   <BookThreeAuthors/>
      //   <MultipleAuthors/>
      //   <SinglePublisher/>
      //   <Website/>
      //   <JournalArticle/>
      //   <Essay/>
      // </div>
    )
}

export default Templates;
