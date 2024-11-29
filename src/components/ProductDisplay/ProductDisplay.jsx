import { useContext } from 'react';
import { 
    ProductDisplaybody, 
    ProductDisplayleft, 
    ProductDisplayright, 
    ProductDisplayimgList, 
    ProductDisplayimg, 
    ProductDisplaymainimg, 
    ProductDisplaymainimgbig, 
    ProductDisplayrightstar,
    ProductDisplayrightstarimg,
    ProductDisplayrightstardullimg,
    ProductDisplayrightprice,
    ProductDisplayrightoldprice,
    ProductDisplayrightnewprice,
    ProductDisplayrightdescription,
    ProductDisplayrightsize,
    ProductDisplayrightsizes,
    ProductDisplayrightsizetyp,
    ProductDisplayrightbtn,
    ProductDisplayrightcatgeory,
} from './ProductDisplaystyle.js';

import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext.jsx';

const ProductDisplay = (props) => {
    const { product } = props; 
    const {addToCart} = useContext(ShopContext);

    return (
        <ProductDisplaybody>
            <ProductDisplayleft>
                <ProductDisplayimgList>
                    <ProductDisplayimg src={product?.image} alt='' />
                    <ProductDisplayimg src={product?.image} alt='' />
                    <ProductDisplayimg src={product?.image} alt='' />
                    <ProductDisplayimg src={product?.image} alt='' />
                </ProductDisplayimgList>

                <ProductDisplaymainimg>
                    <ProductDisplaymainimgbig src={product?.image} alt='' />
                </ProductDisplaymainimg>  
            </ProductDisplayleft>

            <ProductDisplayright>
                <h3>{product?.name}</h3>
                <ProductDisplayrightstar>
                    <ProductDisplayrightstarimg src={star_icon} alt='' />
                    <ProductDisplayrightstarimg src={star_icon} alt='' />
                    <ProductDisplayrightstarimg src={star_icon} alt='' />
                    <ProductDisplayrightstarimg src={star_icon} alt='' />
                    <ProductDisplayrightstardullimg src={star_dull_icon} alt='' />
                    <p>(248)</p>
                </ProductDisplayrightstar>

                <ProductDisplayrightprice>
                    <ProductDisplayrightoldprice>${product?.old_price}</ProductDisplayrightoldprice>
                    <ProductDisplayrightnewprice>${product?.new_price}</ProductDisplayrightnewprice>
                </ProductDisplayrightprice>

                <ProductDisplayrightdescription>
                    <p>Navy Blue and Black colourblocked padded jacket, has a hood, 3 pockets, zip closure, long sleeves, straight hem, and polyester lining</p>
                </ProductDisplayrightdescription>

                <ProductDisplayrightsize>
                    <h3>Selected Size</h3>
                    <ProductDisplayrightsizes>
                        <ProductDisplayrightsizetyp>S</ProductDisplayrightsizetyp>
                        <ProductDisplayrightsizetyp>M</ProductDisplayrightsizetyp>
                        <ProductDisplayrightsizetyp>L</ProductDisplayrightsizetyp>
                        <ProductDisplayrightsizetyp>XL</ProductDisplayrightsizetyp>
                        <ProductDisplayrightsizetyp>XXL</ProductDisplayrightsizetyp>
                    </ProductDisplayrightsizes>
                </ProductDisplayrightsize>

                <ProductDisplayrightbtn onClick={()=> addToCart(product.id)}>ADD TO CART</ProductDisplayrightbtn>

                <ProductDisplayrightcatgeory>
                    <span>Category :</span> Women, T-shirt, Crop Top
                </ProductDisplayrightcatgeory>

                <ProductDisplayrightcatgeory>
                    <span>Tags :</span> Modern, Latest
                </ProductDisplayrightcatgeory>
            </ProductDisplayright>
        </ProductDisplaybody>
    );
}

export default ProductDisplay;
