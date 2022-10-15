import { useState } from "react";
import queryString from "query-string";
import { Link, useNavigate, useLocation } from "react-router-dom";


import logo from "../assets/img/logo-mercado-libre.svg";
import searchIco from "../assets/img/search-ico.svg";

type Props = {
  onNewCategory: (arg:string) => {}
}

export const SearchBar = ({onNewCategory}:Props) => {

  const navigate = useNavigate();
  const location = useLocation();

  const {search} = queryString.parse( location.search );

  const [inputValue, setInputValue] = useState<any>(search);
  
  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value:string = e.target.value;
    setInputValue(value)
  };


  const onSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputValue === undefined || inputValue === "") return false;
    onNewCategory(inputValue);
    navigate(`/items?search=${ inputValue }`);
    setInputValue("")
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row flex">
          <Link
            className='header__brand'
            to="/"
          >
            <img
              src={logo}
              alt="Logo Mercado Libre"
            />
          </Link>
          <form
            onSubmit={ onSubmit }
            className="header__form"
          >
            <fieldset className="header__input-group flex">
              <input
                type="text"
                placeholder="Nunca dejes de buscar"
                className="header__input"
                value={inputValue || ""}
                onChange={onInputChange}
              />
              <button
                type="submit"
                className="header__button"
              >
                <img
                  src={searchIco}
                  alt="Icono de Busqueda"
                />
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </header>
  )
}
