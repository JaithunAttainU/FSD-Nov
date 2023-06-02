import './App.css';
import CartCounterFunc from './components/CartCounterFunc';
import Dummy from './components/Dummy';
import images from './mock/images';

function App() {
  return (
    // <div className="d-flex m-1">
    //   {images.map((image, index) => {
    //     return (
    //       <div key={image.id}>
    //         <CartCounterFunc imageUrl={image.url} />
    //       </div>
    //     )
    //   })}
    // </div>

    <Dummy />
    // <CartCounter />
    // <CartCounter />
  );
}

export default App;
