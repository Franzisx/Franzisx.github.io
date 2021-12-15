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
    <h3>Autors</h3>
    {(creatorsCount === 1) && <BookSingleAuthor/>}
    {(creatorsCount === 2) && <BookTwoAuthors/>}
    {(creatorsCount === 3) && <BookThreeAuthors/>}
    {(creatorsCount > 3) && <MultipleAuthors/>}
  </>

)
}
