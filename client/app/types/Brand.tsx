class Brand {
    id: string;
    name: string;
    image: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.image = `/brands/brandImages/${this.id}.png`;
    }
}

export default Brand;
