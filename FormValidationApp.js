<!DOCTYPE html>
<html>
<head>
    <title>Form Validation</title>
    <style>
        input {
            display: block;
            width: 250px;
            padding: 8px;
            margin-top: 5px;
        }
        .error {
            color: red;
            font-size: 14px;
            margin-bottom: 10px;
        }
        .valid {
            border: 2px solid green;
        }
        .invalid {
            border: 2px solid red;
        }
        button {
            margin-top: 10px;
            padding: 8px 15px;
        }
    </style>
</head>
<body>

<h2>Registration Form</h2>

<form id="form">
    <label>Name:</label>
    <input id="name">
    <div id="nameErr" class="error"></div>

    <label>Email:</label>
    <input id="email">
    <div id="emailErr" class="error"></div>

    <label>Password:</label>
    <input id="password" type="password">
    <div id="passErr" class="error"></div>

    <button type="submit">Register</button>
</form>

<script>
let form = document.getElementById("form");
let nameF = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("password");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let ok = true;

    if (nameF.value.trim() === "") {
        document.getElementById("nameErr").textContent = "Name is required";
        nameF.className = "invalid";
        ok = false;
    } else {
        document.getElementById("nameErr").textContent = "";
        nameF.className = "valid";
    }

    if (email.value.trim() === "" || email.value.indexOf("@") === -1) {
        document.getElementById("emailErr").textContent = "Enter a valid email";
        email.className = "invalid";
        ok = false;
    } else {
        document.getElementById("emailErr").textContent = "";
        email.className = "valid";
    }

    if (pass.value.length < 8) {
        document.getElementById("passErr").textContent = "Password must be 8+ characters";
        pass.className = "invalid";
        ok = false;
    } else {
        document.getElementById("passErr").textContent = "";
        pass.className = "valid";
    }

    if (ok) alert("Form submitted successfully!");
});
</script>

</body>
</html>
