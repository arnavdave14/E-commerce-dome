
import { Iitem, Itemimg, Itemprices, Itempricenew, Itempriceold } from './Itemstyle.js';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <Link to={`/Product/${props.id}`} style={{ textDecoration: 'none' }}>
      <Iitem>
        <Itemimg onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} />
        <p>{props.name}</p>
        <Itemprices>
          <Itempricenew>₹{props.new_Price}</Itempricenew>
          <Itempriceold>₹{props.old_Price}</Itempriceold>
        </Itemprices>
      </Iitem>
    </Link>
  );
};

export default Item;