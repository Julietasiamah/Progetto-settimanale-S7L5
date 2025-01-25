/*const Urlapi = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjgxMmI3NDcwMTAwMTU4YjJiNWMiLCJpYXQiOjE3Mzc3MTM2ODMsImV4cCI6MTczODkyMzI4M30.6rQd10oV76TvWggiCXmPbvhAecQqbFH4X78pKjB8iUs";

function getProductId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

function fetchProductDetails() {
  const id = getProductId();
  if (!id) {
    productDetails.innerHTML = '<p class="text-danger">Product not found!</p>';
    return;
  }

  fetch(`${Urlapi}${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((product) => {
      productName.innerText = product.name;
      productDetails.innerHTML = `
      <img src="${product.imageUrl}" class="img-fluid mb-4" alt="${product.name}">
      <p><strong>Brand:</strong> ${product.brand}</p>
      <p><strong>Description:</strong> ${product.description}</p>
      <p><strong>Price:</strong> $${product.price}</p>
    `;
    })
    .catch((err) => console.log(err));
}

fetchProductDetails();*/

const products = [
  {
    _id: "1",
    name: "Olii essenziale",
    description: "Il miglior olio",
    brand: "Olio",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661597156656-75ba116e9e1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 20.55,
  },
  {
    _id: "2",
    name: "Hemp Seed",
    description: "Per una vita più sana",
    brand: "Erbology",
    imageUrl:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2RvdHRpfGVufDB8fDB8fHww",
    price: 19.99,
  },
  {
    _id: "3",
    name: "Curology",
    description: "Per la cura della pelle",
    brand: "Cure",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661630984481-e29093921ff7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 29.99,
  },
  {
    _id: "4",
    name: "Curology",
    description: "Per la cura della pelle",
    brand: "Cure",
    imageUrl:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 41.11,
  },
  {
    _id: "5",
    name: "Overrose",
    description: "Per la cura della pelle",
    brand: "overrosse",
    imageUrl:
      "https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 45.22,
  },
  {
    _id: "6",
    name: "Sun Screen",
    description: "Per la cura della pelle",
    brand: "Cure",
    imageUrl:
      "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 30.99,
  },
];

const productDetails = document.getElementById("productDetails");

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function displayProductDetails() {
  const productId = getProductIdFromURL();
  const product = products.find((p) => p._id === productId);

  if (product) {
    productDetails.innerHTML = `
        <div class="card">
          <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Price:</strong> $${product.price}</p>
          </div>
        </div>
      `;
  } else {
    productDetails.innerHTML = `<p>Prodotto non trovato.</p>`;
  }
}

displayProductDetails();
