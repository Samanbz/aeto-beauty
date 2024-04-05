class Category {
    name: string;
    pathName: string;

    constructor(name: string) {
        this.name = name;
        this.pathName = name.replace("-", "").toLowerCase();
    }
}

export default Category;
