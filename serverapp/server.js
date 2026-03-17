const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// kết nối database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "warehouse"
});

// lấy tất cả orders
  app.get("/orders", (req,res)=>{

  db.query(
    "SELECT * FROM orders",
    (err,result)=>{

      if(err){
        console.log(err);
        return res.status(500).json(err);
      }

      res.json(result);
    }
  );
}); 
// API lấy danh sách orders
  app.get("/orders/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "SELECT * FROM orders WHERE id = ?",
    [id],
    (err, result) => {

      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      if (result.length === 0) {
        return res.json(null);
      }

      res.json(result[0]);
    }
  );
},),





app.listen(3000,'0.0.0.0', () => {
  console.log("Server running on port 3000");
});