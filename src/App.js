import { useEffect, useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  const [text, setText] = useState("");
  
  console.log(text)

  const [info, setInfo] = useState({});

  const api = "https://kitsu.io/api/edge"

  useEffect(() => {

    if(text){
      fetch(`${api}/anime?filter[text]=${text}`)
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

      {info.data && (
        <ul>
            {info.data.map((anime) => (
                <li key={anime.id}>
                  {anime.attributes.canonicalTitle}
                </li>
            ))}
        </ul>
      )}

    </div>
  );
}

export default App;
