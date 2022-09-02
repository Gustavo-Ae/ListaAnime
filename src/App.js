import { useEffect, useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  const [text, setText] = useState("");
  
  // console.log(text)

  const [info, setInfo] = useState({});

  const api = "https://kitsu.io/api/edge"

  useEffect(() => {

    if(text){
      setInfo({})
      console.log(text)
      fetch(`${api}/anime?filter[text]=${text}&page[limit]=9`)
        .then((resposta) => resposta.json())
        .then((resposta) => {
          setInfo(resposta)
          // console.log(resposta.data[0].attributes.canonicalTitle)
          // console.log(resposta)
        })
    }

  }, [text])

  return (
    <div className="App">
      <h1>Animes</h1>
      <SearchInput 
        value={text} 
        onChange={(search) => setText(search)} 
      />

      {text && !info.data && (
        <div>Carregando...</div>
      )}

      {info.data && (
        <ul className='animes-list'>
            {info.data.map((anime) => (
                <li key={anime.id}>
                  <img src={anime.attributes.posterImage.small}  alt={anime.attributes.canonicalTitle}/>
                  {anime.attributes.canonicalTitle}
                </li>
            ))}
        </ul>
      )}

    </div>
  );
}

export default App;
