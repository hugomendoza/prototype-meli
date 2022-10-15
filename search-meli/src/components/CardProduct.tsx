import { Link } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";

interface PropsProduct  {
  id: string;
  title: string;
  price: {
      currency?: string;
      amount: number,
      decimals: number
  },
  picture: string;
  condition?: boolean,
  free_shipping: boolean,
  provincia: string
}

export const CardProduct = ({id, title, price, picture, free_shipping, provincia}:PropsProduct) => {

  const formatPrice = price["amount"];
  const currencyNumber = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(formatPrice)

  return (
    <article>
      <Link
        to={`/items/${id}`}
        className="card"
      >
        <div className="row flex">
          <figure className="card__img">
            <img src={picture} alt={title} />
          </figure>
          <div className="card__data flex">
            <header className="card__header">
              <p className="card__price">
                {currencyNumber}
                <sup>{price["decimals"] > 10 ? price["decimals"] : `${price["decimals"]}0`}</sup>
                {
                  free_shipping &&
                  <span title="envio gratis"><FaShippingFast /></span>
                }
              </p>
              <h2 className="card__name">{title}</h2>
            </header>
            <div className="card__city">
              <p>{provincia}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  ) 
}

const defaultProps:PropsProduct = {
  id: "",
  title: "",
  price: {
    amount: 0,
    decimals: 0
  },
  picture: "",
  free_shipping: true,
  provincia: ""
}

CardProduct.defaultProps = defaultProps;
