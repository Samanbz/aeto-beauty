import Product from "./Product";

class Products {
    products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    getProductById = (productId: string) => {
        return this.products.find((product) => product.id === productId);
    };

    getProductsByBrand = (brandId: string) => {
        let productsFound = this.products.filter(
            (product) => product.id.slice(1, 3) === brandId
        );
        return productsFound.length > 0 ? new Products(productsFound) : null;
    };

    getProductsByCategory = (categoryId: string) => {
        let productsFound = this.products.filter(
            (product) => product.id[0] === categoryId
        );
        return productsFound.length > 0 ? new Products(productsFound) : null;
    };

    getRandomProducts = (count: number) => {
        const randomProducts = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(
                Math.random() * this.products.length
            );
            randomProducts.push(this.products[randomIndex]);
        }
        return randomProducts;
    };
}

export default Products;
