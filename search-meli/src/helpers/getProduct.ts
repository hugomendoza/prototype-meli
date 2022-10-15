export const getProduct =  async(q:string) => {
  const url = `https://api-meli-hugo.herokuapp.com/api/items?q=${q}`;
  const resp = await fetch(url);
  return resp;
}