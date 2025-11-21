<!DOCTYPE html>
<html>
<head>
    <title>Product Search Filter</title>
    <style>
        #products {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        .card {
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 6px;
            background: #fafafa;
        }
        .title {
            font-size: 16px;
            font-weight: bold;
        }
        .price {
            color: green;
            margin-top: 5px;
        }
        input {
            padding: 8px;
            width: 250px;
        }
    </style>
</head>
<body>

<h2>Product Search Filter</h2>

<input id="search" placeholder="Search products...">

<div id="products"></div>

<script>
let allProducts = [];

async function loadProducts() {
    let res = await fetch("https://fakestoreapi.com/products");
    allProducts = await res.json();
    showProducts(allProducts);
}

function showProducts(list) {
    let box = document.getElementById("products");
    box.innerHTML = "";

    list.forEach(p => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML =
            `<div class='title'>${p.title}</div>
             <div class='price'>$${p.price}</div>`;
        box.appendChild(div);
    });
}

let timer;
function debounce(fn, delay) {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
}

document.getElementById("search").addEventListener("input", function() {
    debounce(() => {
        let text = this.value.toLowerCase();
        let filtered = allProducts.filter(p =>
            p.title.toLowerCase().includes(text)
        );
        showProducts(filtered);
    }, 300);
});

loadProducts();
</script>

</body>
</html>
