import Header from './components/Header'
import alanBtn from '@alan-ai/alan-sdk-web'
import { useEffect } from 'react'
import { Data } from './Data'
import { useState } from 'react'
import Card from './components/Card'


function App() {
  const [category, setCategory] = useState([])

  useEffect(() => {
    alanBtn({
      key:
        '844c133f37e3c2bf3688ea96f7e62f472e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, product }) => {
        if (command === '') {
          filter('');
        }
        if (command === 'show') {
          filter(product);
        }

      }
    });
    filter(''); //for first time all items will be shown
  }, []);

  const filter = (names) => {
    // const filtered = Data.filter(function (item) {
    //   if (item.name.includes(names))
    //     return true;
    //   else
    //     return null;
    // })
    const filtered = Data.filter(item => item.name.includes(names));

    setCategory(filtered)
  }

  return (
    <div className="App">
      <Header></Header>
      <hr /> <hr /><hr /><hr /><hr />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          category.map((item) => (
            <Card
              image={item.image}
              name={item.name}
              rating={item.rating}
              actualPrice={item.actualPrice}
              offerPrice={item.offerPrice}
            />
          ))
        }
      </div>
    </div >
  );
}

export default App;
