import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './Item.styles';
import {Card} from "@material-ui/core";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleItemDetails: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({item, handleAddToCart, handleItemDetails}) => (
  <Wrapper>
      <img src={item.image} alt={item.title} onClick={() => handleItemDetails(item)}/>
        <div onClick={() => handleItemDetails(item)}>
          <h3>{item.title}</h3>
          <h3>${item.price}</h3>
        </div>
      <Button
        onClick={() => handleAddToCart(item)}
        data-cy={`add-to-cart-${item.id}`}>Add to cart</Button>
  </Wrapper>
);

export default Item;
