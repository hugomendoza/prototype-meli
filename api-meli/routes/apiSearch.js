/*
  Rutas de API de busqueda
  host + /api/items
*/

const { Router } = require("express");
const fetch = require("node-fetch");
const apiSearch = Router();

const {apiUrl, author, errors} = require("../commons/index");

//Rutas
apiSearch.get("/", async (req, res) => {

  const nameProduct = req.query.q
  
  if(nameProduct === "") return res.status(400).json({
    msg: errors.vacio
  });
  
  try {

    const response = await fetch(`${apiUrl}/sites/MLA/search?q=:${nameProduct}&limit=4`);
    const data = await response.json();
    const {results, filters, available_filters} = data;

    if(results.length === 0) return res.status(400).json({
      msg: errors.no_encontrado
    });

    //Constante para filtrar las categorías de available_filters
    const filterCategory =  available_filters[0].id;

    //Arreglo vacio para almacenar las
    //Categorías filtradas
    let categories = []


    //Se compara sí el primer id de available_filters
    //contiene el id category y se almacenan los resultados
    //en el arreglo categories
    if(filterCategory === "category") {
      const sortedCats = available_filters[0].values.sort((a, b) => {
        return b.results - a.results;
      });
      for (const value of sortedCats) {
        categories.push(value.name)
      }
    }
    else {
      //Sí available_filters no contiene el id category
      //se almacenan la categorías que contiene el parametro filters
      //del API que se consulta
      const { path_from_root } = filters[0].values[0];
      for (const category of path_from_root) {
        categories.push(category.name)
      }
    }

    //Se formatean los resultados para retornar
    //los datos necesarios para construir el API para enviar al cliente
    const formattedResults = results.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: {
          currency: product.currency_id,
          amount: Math.trunc(product.price),
          decimals: Number(product.price.toString().split('.')[1]) || 0
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping["free_shipping"],
        provincia: product.address["state_name"]
      }
    })

    return res.json({
      author: author,
      categories: categories,
      items: formattedResults
    })
    
  }catch(error) {
    console.log(error)
    res.status(500).json({
      msg: "Por favor hable con el administrador"
    });
  }
})

module.exports = apiSearch;