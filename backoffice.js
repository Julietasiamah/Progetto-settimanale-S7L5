const Urlapi = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjgxMmI3NDcwMTAwMTU4YjJiNWMiLCJpYXQiOjE3Mzc3MTM2ODMsImV4cCI6MTczODkyMzI4M30.6rQd10oV76TvWggiCXmPbvhAecQqbFH4X78pKjB8iUs";

//seleziono gli elementi che mi servono
const productForm = document.getElementById("Productform");
const productList = document.getElementById("productList");
const resetBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submitBtn");
const alerts = document.getElementById("alerts");

function showAlert(message, type = "success") {
  alerts.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => (alerts.innerHTML = ""), 2000);
}

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
fetchallProducts();

submitBtn.addEventListener("click", () => {
  const id = document.getElementById("productId").value;
  const method = id ? "PUT" : "POST";
  const url = id ? `${Urlapi}${id}` : Urlapi;

  const payload = {
    name: document.getElementById("Productname").value,
    brand: document.getElementById("Productbrand").value,
    description: document.getElementById("productDescription").value,
    imageUrl: document.getElementById("Productimg").value,
    price: parseFloat(document.getElementById("ProductPrice").value),
  };

  fetch(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then(() => {
      showAlert(id ? "Product updated succesfully" : "Product added successfully");
      productForm.reset();
      fetchallProducts();
    })
    .catch((err) => console.log(err));
});

function productEdit(id) {
  fetch(`${Urlapi} ${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((product) => {
      document.getElementById("productId").value = product._id;
      document.getElementById("Productname").value = product.name;
      document.getElementById("Productbrand").value = product.brand;
      document.getElementById("productDescription").value = product.description;
      document.getElementById("Productimg").value = product.imageUrl;
      document.getElementById("ProductPrice").value = product.price;
    })
    .catch((err) => console.log(err));
}

function deleteProduct(id) {
  fetch(`${Urlapi}${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(() => {
      showAlert("Product deleted successfully");
      fetchallProducts();
    })
    .catch((err) => console.log(err));
}
resetBtn.addEventListener("click", () => {
  productForm.reset();
  document.getElementById("productId").value = "";
});

fetchallProducts();
