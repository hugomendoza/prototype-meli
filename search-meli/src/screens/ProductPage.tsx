import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb, Seo } from '../components';

export const ProductPage = () => {

  const {id} = useParams()

  const [features, setFeatures] = useState<any>({})

  const getProductById = async() => {
    const url = `https://api-meli-hugo.herokuapp.com/api/items/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
    setFeatures(data.item)
  }

  useEffect(() => {
    getProductById();
  }, [id]);

  const {title, picture, description, condition, sold_quantity, price, category} = features;
  const formatPrice = price?.amount;
  const currencyNumber = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(formatPrice)
  return (
    <>
      <Seo name={id} />
      <div className="container">
        <Breadcrumb categories={[category]}/>
        <section className="product">
          <div className="row flex">
            <article>
              <figure className="product__img">
                <img src={picture} alt={title} />
              </figure>
              <div className="product__description">
                <h3>Descripción del producto</h3>
                <p>{description}</p>
              </div>
            </article>
            <aside>
              <p className="product__sold">{condition} - {sold_quantity} vendidos</p>
              <h1>{title}</h1>
              <p className="product__price">{currencyNumber}
                <sup>{price?.decimals > 10 ? price?.decimals : `${price?.decimals}0`}</sup>
              </p>
              <button className="product__button">Comprar</button>
            </aside>
          </div>
        </section>
      </div>
    </>
  )
}
