import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { ProductBody } from './Js/Product.js';
import Breadcrum from '../components/Breadcrums/Breadcrum.jsx';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox.jsx';
import ReletadeProductPage from '../components/ReletadProductPage/ReletadeProductPage.jsx';
// import Popular from '../components/Popular/Popular.jsx';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { ProductId } = useParams();
  const product = all_product.find((e) => e.id === Number(ProductId));

 
  return (
    <ProductBody>
      <Breadcrum Product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <ReletadeProductPage/>
    </ProductBody>
  );
};

export default Product;
