import Header from '../header/Header';
import ItemList from '../item-list/ItemList';
import PersoneDetails from '../persone-details/PersoneDetails';
import RandomPlanet from '../random-planet/RandomPlanet';

function App() {
  return (
    <>
      <div className='app container'>
        <Header />
        <RandomPlanet />
        <div className='row mt-2'>
          <div className='col-md-6'>
            <ItemList />
          </div>
          <div className='col-md-6'>
            <PersoneDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
