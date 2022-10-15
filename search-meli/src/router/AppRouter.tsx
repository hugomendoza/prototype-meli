import { useEffect, useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import queryString from "query-string";
import {Helmet} from "react-helmet";


import { HomePage, ProductPage, SearchPage } from "../screens";
import { SearchBar, Seo } from "../components";

export const AppRouter = () => {

  const [productData, setProductData] = useState({})
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const {search} = queryString.parse( location.search )

  const onAddCategory = async (arg?:any) => {

    if(arg === undefined) {
      // setLoading(false)
      return false;
    } else {
      const url = `https://api-meli-hugo.herokuapp.com/api/items?q=${arg}`;
      const resp = await fetch(url);
      const data = await resp.json();
      setProductData(data);
      setLoading(false)
    }
  }
  
  useEffect(() => {
    onAddCategory(search)
  }, [])

  // console.log(loading)

  
  return (
    <>
      <SearchBar onNewCategory={ onAddCategory } />
      <Routes>
        <Route path="/" element={ <HomePage /> }></Route>
        <Route path="items" element={ <SearchPage data={ productData } loading={loading} /> }></Route>
        <Route path="items/:id" element={ <ProductPage /> }></Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
