import Brand from "./Brand";

class Brands {
    static brands: Brand[] = [
        new Brand("00", "NARS"),
        new Brand("01", "Estée Lauder"),
        new Brand("02", "Yves Saint Laurent"),
        new Brand("03", "L`Oréal Paris"),
        new Brand("04", "Huda Beauty"),
        new Brand("05", "Essence"),
        new Brand("06", "Eau Thermale Avène"),
        new Brand("07", "BIAFIN"),
        new Brand("08", "La Roche Posay"),
        new Brand("09", "Eucerin"),
        new Brand("10", "Bioderma"),
        new Brand("11", "Lierac"),
        new Brand("12", "Filorga"),
        new Brand("13", "Shiseido"),
        new Brand("14", "Clarins"),
        new Brand("15", "The Ordinary"),
        new Brand("16", "Chanel"),
        new Brand("17", "Dior"),
        new Brand("18", "Lancôme"),
        new Brand("19", "Jean Paul Gualtier"),
        new Brand("20", "Giorgio Armani"),
        new Brand("21", "Phyto"),
        new Brand("22", "HAIRtamin"),
        new Brand("23", "Priorin"),
        new Brand("24", "Doppelherz"),
        new Brand("25", "Ducray"),
        new Brand("26", "Kérastase"),
        new Brand("27", "Biotherm"),
        new Brand("28", "Clinique"),
        new Brand("29", "CeraVe"),
    ];

    static getBrandById(id: string): Brand | null {
        return Brands.brands.find((brand) => brand.id === id) || null;
    }
}

export default Brands;
