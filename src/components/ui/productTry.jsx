import { products, products2,productsMain3 } from "../../data/products";
export const updatedProducts = products.map((item) => {
  if (item.off && item.priceC) {
    const offNumber = parseFloat(item.off.replace("-", "").replace("%", ""));
    const originalPrice = parseFloat(item.priceC.replace("$", ""));
    const discountedPrice = originalPrice * (1 - offNumber / 100);
    return {
      ...item,
      price: `$${discountedPrice.toFixed(0)}`,
    };
  }
  return item;
});

export const updatedProducts2 = products2.map((item) => {
  if (item.off && item.priceC) {
    const offNumber = parseFloat(item.off.replace("-", "").replace("%", ""));
    const originalPrice = parseFloat(item.priceC.replace("$", ""));
    const discountedPrice = originalPrice * (1 - offNumber / 100);
    return {
      ...item,
      price: `$${discountedPrice.toFixed(0)}`,
    };
  }
  return item;
});

export const updatedProducts3 = productsMain3.map((item) => {
  if (item.off && item.priceC) {
    const offNumber = parseFloat(item.off.replace("-", "").replace("%", ""));
    const originalPrice = parseFloat(item.priceC.replace("$", ""));
    const discountedPrice = originalPrice * (1 - offNumber / 100);
    return {
      ...item,
      price: `$${discountedPrice.toFixed(0)}`,
    };
  }
  return item;
});
