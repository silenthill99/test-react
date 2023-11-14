import logo from './logo.svg';
import '../styles/App.css';
import Banner from './Banner';
import { Cart } from './Cart';
import { ShoppingList } from './ShoppingList';
import { Recommendation } from './Recommendation';


function App() {
  return (
    <div>
      <Banner/>
      <Recommendation/>
      {/* <Cart/> */}
      <ShoppingList/>
    </div>
  );
}

export default App;
