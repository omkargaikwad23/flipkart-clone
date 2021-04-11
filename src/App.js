import Header from './components/Header'
import alanBtn from '@alan-ai/alan-sdk-web'
import { useEffect } from 'react'
import { Data } from './Data'
import { useState } from 'react'
import Card from './components/Card'
import FilterMenu from './components/FilterMenu'

function App() {
  const [category, setCategory] = useState([])

  useEffect(() => {
    alanBtn({
      key:
        'ff0e25f22d9e3b27d32ba4377e4d85a22e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, product, amount }) => {
        if (command === '') {
          filter('');
        }
        if (command === 'show') {
          filter(product);
        }
        if (command === 'show2' && amount > 0) {
          filter(product, amount)
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
      <FilterMenu></FilterMenu>
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
