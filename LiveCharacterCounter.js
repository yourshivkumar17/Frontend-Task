<!DOCTYPE html>
<html>
<head>
    <title>Live Character Counter</title>
</head>
<body>

<h3>Live Character Counter</h3>

<textarea id="textBox" rows="5" cols="40" placeholder="Type here..."></textarea>
<p id="count">Characters left: 100</p>

<script>
let limit = 100;
let textBox = document.getElementById("textBox");
let count = document.getElementById("count");

textBox.addEventListener("input", function () {
    let remaining = limit - textBox.value.length;

    if (remaining < 0) {
        textBox.value = textBox.value.substring(0, limit);
        remaining = 0;
    }

    count.textContent = "Characters left: " + remaining;

    if (remaining > 50) {
        count.style.color = "green";
    } else if (remaining > 20) {
        count.style.color = "orange";
    } else {
        count.style.color = "red";
    }
});
</script>

</body>
</html>
