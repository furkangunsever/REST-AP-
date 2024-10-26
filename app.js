const express = require("express");
const app = express();
app.use(express.json());

// İstekleri dinleyen bir rota
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

// Bir uç nokta tanımlama
app.get("/status", (request, response) => {
  const status = {
    Status: "Running",
    Name: "Furkan Can",
    Surname: "Günsever",
  };

  response.send(status);
});
