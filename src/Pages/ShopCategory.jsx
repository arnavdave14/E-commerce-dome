import React, { useContext } from 'react';
import {
  ShopCategorybody,
  ShopCategoryimg,
  ShopCategoryindexshort,
  ShopCategoryshort,
  ShopCategoryshortimg,
  ShopCategoryproduct,
} from './Js/ShopCategory.js';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Items/Item.jsx';
import all_product from '../components/Assets/all_product.js';

const ShopCategory = (props) => {
  return (
    <ShopCategorybody>
      <ShopCategoryimg src={props.banner} alt="" />
      <ShopCategoryindexshort>
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <ShopCategoryshort>
          sort by <ShopCategoryshortimg src={dropdown_icon} alt="dropdown_icon" />
        </ShopCategoryshort>
      </ShopCategoryindexshort>
      <ShopCategoryproduct>
        {all_product.map((item, i) => {
          if (props.Category.toLowerCase() === item.category.toLowerCase()) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_Price={item.new_price}
                old_Price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </ShopCategoryproduct>
    </ShopCategorybody>
  );
};

export default ShopCategory;
