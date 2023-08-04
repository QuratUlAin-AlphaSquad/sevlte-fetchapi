export const load = async ()=> {
    const title = "List of avaiable products";
    const response =await fetch ("http://localhost:4000/products");
    const products = await response.json();
    return {
        title,
        products
    };
};