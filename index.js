const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// ! middlewares
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.fxbdhbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productsCollection = client.db("ShopGridDB").collection("products");

    // ! get Products
    app.get("/products", async (req, res) => {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      const searchText = req.query.searchText;

      const result = await productsCollection
        .find({
          productName: { $regex: searchText, $options: "i" },
        })
        .skip(page * size)
        .limit(size)
        .toArray();

      // Total products count for the query
      const totalProducts = await productsCollection.countDocuments({
        productName: { $regex: searchText, $options: "i" },
      });

      res.send({result, pageNum: Math.ceil(totalProducts / size)});
    });

    // ! get products Count
    app.get("/productCount", async (req, res) => {
      const count = await productsCollection.estimatedDocumentCount();
      res.send({ count });
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("shopGrid server is running");
});

app.listen(port, () => {
  console.log(`shopGrid is running in port ${port}`);
});
