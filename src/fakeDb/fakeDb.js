import { v4 as uuidv4 } from "uuid";

function fakeDb() {
  return [
    {
      name: "Razer Blade 15 ",
      image:"https://www.startech.com.bd/image/cache/catalog/laptop/razer/blade-15-advanced-model/blade-15-advanced-model-01-500x500.jpg",
      price: 265000,
      id: uuidv4(),
    },
    {
      name: "Gigabyte Aorus 15P",
      image:"https://www.startech.com.bd/image/cache/catalog/laptop/gigabyte/aorus-15p-xd/aorus-15p-xd-01-500x500.jpg",
      id: uuidv4(),
      price: 155000,
    },
    {
      name: "Surface Laptop",
      image: "https://www.startech.com.bd/image/cache/catalog/laptop/microsoft/surface-laptop-studio/surface-laptop-studio-01-500x500.jpg",
      id: uuidv4(),
      price: 179000,
    },
    {
      name: "Gigabyte AERO 15",
      image:"https://www.startech.com.bd/image/cache/catalog/laptop/gigabyte/aero-15-oled-kc/aero-15-oled-kc-500x500.jpg",
      id: uuidv4(),
      price:206000,

    },
    {
      name: "Lenovo Legion Y",
      image:"https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/Legion-y740/y740-500x500.jpg",
      id: uuidv4(),
      price: 200000,
    },
    {
      name: "Asus ROG Zephyrus",
      image:"https://www.startech.com.bd/image/cache/catalog/laptop/msi/katana-gf66-12uc/katana-gf66-12uc-03-500x500.jpg",
      id: uuidv4(),
      price: 190000,
    },
    {
      name: "Dell XPS 15",
      image:"https://www.startech.com.bd/image/cache/catalog/laptop/dell/xps-15-9510/xps-15-9510-01-500x500.jpg",
      id: uuidv4(),
      price: 295000,
    },
    {
      name: "MSI Raider GE66",
      image:"https://www.startech.com.bd/image/cache/catalog/laptop/msi/raider-ge66-12uhs/raider-ge66-12uhs-01-500x500.jpg",
      id: uuidv4(),
      price: 299900,
    },
    {
      name: "MSI Prestige 14",
      image:"https://www.startech.com.bd/image/cache/catalog/laptop/msi/prestige-14-a11scx/prestige-14-a11scx-gray-500x500.jpg",
      id: uuidv4(),
      price: 148999,
    },
    {
      name: "MSI Creator Z16",
      image:"https://www.startech.com.bd/image/cache/catalog/laptop/msi/creator-z16-a11uet/creator-z16-a11uet-03-500x500.jpg",
      id: uuidv4(),
      price:219900,
    },

  ];
}

export default fakeDb;
