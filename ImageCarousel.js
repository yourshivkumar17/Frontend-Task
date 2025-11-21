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
    "h
