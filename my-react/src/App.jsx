import React, { useState } from 'react';
import './App.css';
import Smile from './components/Smile';
import './index.css'

import smile from './assets/1568622642_6.jpg';
import smile3 from './assets/th (1).jpg';
import smile4 from './assets/th (3).jpg';
import smile5 from './assets/th (4).jpg';
import smile2 from './assets/th (2).jpg';

function App() {
  const smiles = [smile, smile2, smile3, smile4, smile5];
  const [showWinner , setShowWinner ] = useState(false)
  const [maxCounter, setMaxCounter] = useState(0);
  const [winningSmileSrc, setWinningSmileSrc] = useState(null);


  function counterClick(updatedCounter, src) {
    if (updatedCounter > maxCounter) {
      setMaxCounter(updatedCounter);
      setWinningSmileSrc(src);
    }
  }



  return (
    <>
      <div>
        {smiles.map((src, index) => (
          <div key={index}>
            <Smile src={src} counterClick={counterClick}/>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setShowWinner(true)}>Show Winning Smile</button>
        { showWinner && !!maxCounter && <div><img className='image-win' src={winningSmileSrc} alt="winner" />: {maxCounter}</div> }
      </div>
    </>
  );
}

export default App;