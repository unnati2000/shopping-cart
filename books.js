const booksArray = [
  {
    id: "1",
    name: "The Alchemist",
    price: 200,
    author: "Paulo Cohelo",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    id: "2",
    name: "The magic of big thinking",
    price: 200,
    author: "David J Schwartz",
    image: "https://images.penguinrandomhouse.com/cover/9780698198586",
  },
  {
    id: "3",
    name: "The monk who sold his ferrari",
    price: 200,
    author: "Robin Sharma",
    image: "https://images-na.ssl-images-amazon.com/images/I/61lGw70GGzL.jpg",
  },
  {
    id: "4",
    name: "Rich dad, poor dad",
    price: 200,
    author: "Robert Kiyosaki",
    image:
      "https://5.imimg.com/data5/HB/LA/MY-11183377/rich-dad-poor-dad-500x500.png",
  },
  {
    id: "5",
    name: "A touch if eternity",
    price: 200,
    author: "Durjoy Dutta",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51ben7xI6ZL._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: "6",
    name: "Who moved my cheese?",
    price: 100,
    author: "Dr. Spencer Jhonson",
    image: "https://images-na.ssl-images-amazon.com/images/I/71JpUaCKdrL.jpg",
  },
];

const books = document.querySelector(".category");

for (let i = 0; i < booksArray.length; i++) {
  const item = document.createElement("div");
  item.className = "item";

  const img = document.createElement("img");
  item.src = booksArray[i].image;
  item.append(img);
  console.log(booksArray[i].image);

  const itemDes = document.createElement("div");
  itemDes.className = "item-des";

  const itemName = document.createElement("h3");
  itemName.innerText = booksArray[i].name;

  const itemPrice = document.createElement("p");
  itemPrice.innerText = booksArray[i].price;

  itemDes.append(itemName);
  itemDes.append(itemPrice);

  item.append(itemDes);

  const cartButtonDiv = document.createElement("div");
  cartButtonDiv.className = "button-cart";

  const button = document.createElement("button");
  button.textContent = "Add to Cart";

  cartButtonDiv.append(button);
  item.append(cartButtonDiv);

  books.append(item);
}
