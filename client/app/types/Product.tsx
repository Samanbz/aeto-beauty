import Brand from "./Brand";
import Brands from "./Brands";
import Categories from "./Categories";
import Category from "./Category";

class Product {
    id: string;
    name: string;
    image: string;
    brand: Brand | null;
    category: Category;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.image = `/products/productImages/${this.id}.png`;
        this.brand = Brands.getBrandById(this.id.slice(1, 3));
        this.category = Categories.categories[parseInt(this.id[0])];
    }
}

export default Product;
