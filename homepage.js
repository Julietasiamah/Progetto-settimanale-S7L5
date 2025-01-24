const Urlapi = "https://striveschool-api.herokuapp.com/api/product/";
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
}*/
function editProduct(id) {
  window.location.href = `./backoffice.html?id=${id}`;
}
fetchallProducts();
