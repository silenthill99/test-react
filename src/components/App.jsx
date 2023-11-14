import logo from '../assets/logo.png';
import '../styles/App.css';
import Banner from './Banner';
import { Cart } from './Cart';
import { ShoppingList } from './ShoppingList';


function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo'/>
        <h1>La maison jungle</h1>
      </Banner>
      {/* <Cart/> */}
      <ShoppingList/>
    </div>
  );
}

export default App;
