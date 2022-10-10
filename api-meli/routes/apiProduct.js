const { Router } = require("express");
const fetch = require("node-fetch");
const apiProduct = Router();

const { apiUrl, author } = require("../commons");
const apiSearch = require("./apiSearch");

apiSearch.get("/:id", async (req, res) => {
  
  const idProd = req.params.id;
  
  try {

    const response = await fetch(`${apiUrl}/items/${idProd}`);
    const data = await response.json();
    const { id, title, currency_id, price, thumbnail, condition, shipping, sold_quantity, category_id } = data;

    const respDesc = await fetch(`${apiUrl}/items/${idProd}/description`);
    const dataDesc = await respDesc.json();
    const { plain_text } = dataDesc

    const respCat = await fetch(`${apiUrl}/categories/${category_id}`);
    const dataCat = await respCat.json();
    const { path_from_root } = dataCat;

    let catProduct = "";
    let description = "No hay descripción del producto disponible en este momento";
    
    if(plain_text) {
      description = plain_text
    } else {
      description;
    }

    for (const cat of path_from_root) {
      catProduct = cat.name
    }

    return res.json({
      author: author,
      item: {
        id: id,
        title: title,
        price: {
          currency: currency_id,
          amount: Math.trunc(price),
          decimals: Number(price.toString().split('.')[1]) || 0
        },
        picture: thumbnail,
        condition: `${condition === 'new' ? 'Nuevo' : 'Usado'}`,
        free_shipping: shipping["free_shipping"],
        sold_quantity: sold_quantity,
        description: description,
        category: catProduct
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: "Por favor hable con el administrador"
    });
  }


})

module.exports = apiProduct;