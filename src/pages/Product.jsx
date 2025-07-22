import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/ui/Footer";
import Header1 from "../components/ui/Header1";
import MainDitals from "../components/ui/MainDetals";
import MainComment from "../components/ui/MainComment";
import MainDetailProduct from "../components/ui/MainDetailProduct";
import { updatedProducts, updatedProducts2 } from "../components/ui/productTry";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [product2, setProduct2] = useState();
  console.log(product);

  useEffect(() => {
    const foundProduct = updatedProducts.find((item) => item.id == id);
    console.log(foundProduct);
    setProduct(foundProduct);
  }, [id]);
  useEffect(() => {
    const foundProduct = updatedProducts2.find((item) => item.id == id);
    console.log(foundProduct);
    setProduct2(foundProduct);
  }, [id]);
  return (
    <>
      <Header1 />
      <MainDitals product={product} product2={product2} />
      <MainComment />
      <MainDetailProduct />

      <Footer />
    </>
  );
}

export default Product;
