const express = require("express");
const app = express();
const cors = require("cors");
const port = 8082;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

const router = express.Router();
router.post("/user/", (request, response) => {
  const { fullname, address1, address2, city,country,postcode } = request.body;
  const reply = `${fullname}  ${address1}  ${address2} ${city} ${country} ${postcode}`;
  response.json({ response: reply });
});
app.use(router);
