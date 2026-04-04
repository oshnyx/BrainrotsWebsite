const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.post("/submit", (req, res) => {
    const { fullname, email, phone, subject, message } = req.body;

    console.log("Full Name:", fullname);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Subject:", subject);
    console.log("Message:", message);

    res.send("Form submitted successfully!");
});

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});