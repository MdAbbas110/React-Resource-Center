import { useDispatch, useSelector } from 'react-redux';
import { addItems } from './redux/cartSlice';

const Cart = () => {
  //using the useSelector to subscribe the store slice
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItems('payload'));
  };

  const color = useSelector((store) => store.switchBg.color);
  console.log(cartItems);
  return (
    <div style={{ backgroundColor: color, marginTop: '20px' }}>
      <button onClick={handleAddItem}>Add fruits</button>
      <h1>Cart items {cartItems.length}</h1>
    </div>
  );
};

export default Cart;
