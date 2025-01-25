//Ho commentato il codice con il metodo fetch sotto il quanto il server ha smesso di funzionare
//Momentaneamente come anche da lei sugerito, ho creato un arraY locale

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

const productList = document.getElementById("productList");

function displayProducts() {
  productList.innerHTML = "";

  products.forEach((product) => {
    productList.innerHTML += `
      <div class="col-4 mt-3">
        <div class="card h-100 ">
          <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <div class="d-flex justify-content-between">
              <a href="./details.html?id=${product._id}" class="btn btn-primary">Visualizza </a>
              <a href="./backoffice.html?id=${product._id}" class="btn btn-success">Modifica</a>
            </div>
          </div>
        </div>
      </div>`;
  });
}

function viewDetails(id) {
  console.log(`Viewing details for product ID: ${_id}`);
}

function editProduct(id) {
  console.log(`Editing product ID: ${_id}`);
}

displayProducts();

/*const Urlapi = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjgxMmI3NDcwMTAwMTU4YjJiNWMiLCJpYXQiOjE3Mzc3MTM2ODMsImV4cCI6MTczODkyMzI4M30.6rQd10oV76TvWggiCXmPbvhAecQqbFH4X78pKjB8iUs";

const productList = document.getElementById("productList");

function fetchallProducts() {
  fetch(Urlapi, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((products) => {
      productList.innerHTML = "";
      products.forEach((product) => {
        productList.innerHTML += `
          <div class="col-md-4">
            <div class="card">
              <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p><strong>Brand:</strong> ${product.brand}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <button class="btn btn-warning btn-sm" onclick="editProduct('${product._id}')">Modifica</button>
                <button class="btn btn-danger btn-sm" onclick="deleteProduct('${product._id}')">Cancella</button>
              </div>
            </div>
          </div>`;
      });
    })
    .catch((err) => console.log(err));
}

/*function viewDetails(id) {
  window.location.href = `/details.html?id= ${id}`;
}
function editProduct(id) {
  window.location.assign;
  `./backoffice.html?id=${id}`;
}
fetchallProducts();*/
