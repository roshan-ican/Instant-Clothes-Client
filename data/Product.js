const PRODUCTS = [
  {
    id: "5f15d92ee520d44421ed8e9b",
    image: "",
    brand: "IKEA",
    price: 350.9,
    rating: 5,
    numReviews: 0,
    isFeatured: true,
    name: "Garden Chair",
    description: "beautiful chair for garden",
    category: {
      $oid: "5f15d5b7cb4a6642bddc0fe8",
    },
    countInStock: 10,
    __v: 0,
  },
  {
    id: "5f15d964e520d44421ed8e9c",
    image: "",
    brand: "OBI",
    price: 1350.9,
    rating: 5,
    numReviews: 0,
    isFeatured: true,
    name: "Swimming Pool",
    description: "beautiful Swimming Pool for garden",
    category: {
      $oid: "5f15d5b7cb4a6642bddc0fe8",
    },
    countInStock: 10,
    __v: 0,
  },
  {
    id: "5f15d9b3e520d44421ed8e9d",
    image:
      "https://png.pngitem.com/pimgs/s/22-221627_male-white-shirt-png-clipart-white-shirt-high.png",
    brand: "OBI",
    price: 490.9,
    rating: 5,
    numReviews: 0,
    isFeatured: true,
    name: "Grass Cut Machine",
    description: "Grass Cut Machine for garden",
    category: {
      $oid: "5f15d5b7cb4a6642bddc0fe8",
    },
    countInStock: 5,
    __v: 0,
  },
  {
    id: "5f15d9b3e520d44421ed8e9d",
    image:
      "https://png.pngitem.com/pimgs/s/22-221627_male-white-shirt-png-clipart-white-shirt-high.png",
    brand: "OBI",
    price: 490.9,
    rating: 5,
    numReviews: 0,
    isFeatured: true,
    name: "Grass Cut Machine",
    description: "Grass Cut Machine for garden",
    category: {
      $oid: "5f15d5b7cb4a6642bddc0fe8",
    },
    countInStock: 5,
    __v: 0,
  },
  {
    id: "5f15d9b3e520d44421ed8e9d",
    image:
      "https://png.pngitem.com/pimgs/s/22-221627_male-white-shirt-png-clipart-white-shirt-high.png",
    brand: "OBI",
    price: 490.9,
    rating: 5,
    numReviews: 0,
    isFeatured: true,
    name: "Grass Cut Machine",
    description: "Grass Cut Machine for garden",
    category: {
      $oid: "5f15d5b7cb4a6642bddc0fe8",
    },
    countInStock: 5,
    __v: 0,
  },
  {
    id: "5f15d9b3e520d44421ed8e9d",
    image:
      "https://png.pngitem.com/pimgs/s/22-221627_male-white-shirt-png-clipart-white-shirt-high.png",
    brand: "OBI",
    price: 490.9,
    rating: 5,
    numReviews: 0,
    isFeatured: true,
    name: "Grass Cut Machine",
    description: "Grass Cut Machine for garden",
    category: {
      $oid: "5f15d5b7cb4a6642bddc0fe8",
    },
    countInStock: 5,
    __v: 0,
  },
  {
    id: "5f15d9b3e520d44421ed8e9d",
    image:
      "https://png.pngitem.com/pimgs/s/22-221627_male-white-shirt-png-clipart-white-shirt-high.png",
    brand: "OBI",
    price: 490.9,
    rating: 5,
    numReviews: 0,
    isFeatured: true,
    name: "Grass Cut Machine",
    description: "Grass Cut Machine for garden",
    category: {
      $oid: "5f15d5b7cb4a6642bddc0fe8",
    },
    countInStock: 5,
    __v: 0,
  },
];

export function getProducts() {
  return PRODUCT;
}
export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
