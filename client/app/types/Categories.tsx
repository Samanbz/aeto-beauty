import Category from "./Category";

class Categories {
    static categories: Category[] = [
        new Category("Make-Up"),
        new Category("Dermatology"),
        new Category("Anti-Aging"),
        new Category("Perfume"),
        new Category("Supplements"),
        new Category("Care"),
    ];

    static getCategoryId(categoryPathName: string) {
        return Categories.categories.findIndex(
            (category) => category.pathName === categoryPathName
        );
    }
}

export default Categories;
