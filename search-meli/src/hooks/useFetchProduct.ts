import { useEffect, useState } from "react";
import { getProduct } from "../helpers/getProduct";

export const useFetchProduct = (q: any) => {

  // console.log(q): true
  const [product, setProduct] = useState([]);
  const [breadCrumb, setBreadCrumb] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async() => {
    const results = await getProduct(q);
    const data = await results.json();

    // console.log(data)

    setProduct(data.items);
    setBreadCrumb(data.categories);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, [])

  return {
    product,
    breadCrumb,
    isLoading
  }
}
