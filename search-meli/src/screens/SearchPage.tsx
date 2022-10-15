import { useState, useEffect } from "react";
import { Breadcrumb, CardProduct, Spinner, NotFound, Seo } from "../components";

export const SearchPage = (data:any, loading:boolean) => {

  const [ categories, setCategories ] = useState([]);
  const [ items, setItems ] = useState<any[]>([]);
  const [ msg, setMsg ] = useState("");
  const [isLoading, setIsLoading] = useState(loading);
  
  useEffect(() => {
    setCategories(data.data.categories);
    setItems(data.data.items);
    setIsLoading(data.loading)
    if(!data.data.msg) {
      setMsg("")
    } else {
      setMsg(data.data.msg)
    }
  }, [data])

  return (
    <>
      <Seo name="Search Product" />
      {
        isLoading && (<Spinner />)
      }
      
      {
        msg && (<NotFound />)
      }

      <section>
        <div className="container">
          <Breadcrumb categories={categories} />
        </div>
      </section>
      <section>
        <div className="container">
          {
            items?.map((product) => (
              <CardProduct key={product.id} {...product} />
            ))
          }
        </div>
      </section>
    </>
  )
}
