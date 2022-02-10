import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';

function App(): ReactElement {
  const URL: string = 'https://api.cryptokitties.co/kitties/';

  const [kitty, setKitty] = useState<any[]>();

  // Fetch clásico

  // function getKitty() {
  //   fetch(URL)
  //   .then((response: any) => {
  //     return response.json();
  //   })
  //   .then((data: any) => {
  //     setKitty(data.kitties);
  //   })
  // };
  
  
  // Fetch con AXIOS (promesas)

  // function getKitty() {
  //   axios.get(URL)
  //     .then((response: any) => {
  //       setKitty(response.data.kitties);
  //     })
  //     .catch((err) => { 
  //       console.error(err);
  //     });
  // };
  

  // Fecth con AXIOS (async-await)

  async function getKitty() {
    try {
      const response = await axios.get(URL);
      setKitty(response.data.kitties);
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <button
        onClick={getKitty}
      >Get Kitty</button>

      {
        !kitty ? 'No kitten' :
        kitty.map((kitty: any) => {
          return (
            <p key={kitty.id}>
              { kitty.name }
            </p>
          )
        })
      }
    </div>
  );
}

export default App;
