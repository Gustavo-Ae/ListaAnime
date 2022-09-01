import { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  const [text, setText] = useState("");
  
  console.log(text)

  return (
    <div className="App">
      <h1>Animes</h1>
      <SearchInput 
        value={text} 
        onChange={(search) => setText(search)} 
      />
    </div>
  );
}

export default App;
