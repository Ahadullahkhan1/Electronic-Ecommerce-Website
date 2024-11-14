let ProductContainer = document.getElementById('Product-container');
let getProducts = async () => {
    let response = await fetch('https://fakestoreapi.in/api/products');
    let data = await response.json();

    data.products.map((product) => {
        ProductContainer.innerHTML += `
        <div class="col-sm-4">
                 <div class="product">
                     <img src="${product.image}" alt="">
                     <h1 class="product-title">${product.title.slice(0, 20  ) + "..."}</h1>
                     <p class="product-detail">${product.description.slice(0,50)+"..."}</p>
                     <h4 class="price"><span>Price:</span> $${product.price}</h4>
                     <button>Buy now</button>
                 </div>
             </div>
      `
    })
}
getProducts()