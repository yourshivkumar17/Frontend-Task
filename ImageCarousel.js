<!DOCTYPE html>
<html>
<head>
    <title>Image Carousel</title>
    <style>
        #carousel {
            width: 400px;
            height: 250px;
            overflow: hidden;
            margin: 20px auto;
            text-align: center;
        }
        #carousel img {
            width: 100%;
            height: 100%;
        }
        button {
            padding: 8px 15px;
            margin: 10px;
        }
    </style>
</head>
<body>

<h2 style="text-align:center;">Image Carousel</h2>

<div id="carousel">
    <img id="slide" src="https://picsum.photos/id/1015/400/250">
</div>

<div style="text-align:center;">
    <button onclick="prev()">Previous</button>
    <button onclick="next()">Next</button>
</div>

<script>
let images = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1025/400/250",
    "https://picsum.photos/id/1035/400/250",
    "https://picsum.photos/id/1045/400/250",
    "https://picsum.photos/id/1055/400/250"
];

let index = 0;
let slide = document.getElementById("slide");

function show() {
    slide.src = images[index];
}

function next() {
    index = (index + 1) % images.length;
    show();
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    show();
}

let autoSlide = setInterval(next, 3000);

slide.onmouseenter = function () {
    clearInterval(autoSlide);
};

slide.onmouseleave = function () {
    autoSlide = setInterval(next, 3000);
};
</script>

</body>
</html>
