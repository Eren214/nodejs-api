var express = require("express");
var router = express.Router();

let books = [
    { id: 1, title: 'Create a project',  order: 1, completed: true, author: 'Diego Laura' },
    { id: 2, title: 'Take a cofféé',     order: 2, completed: true, author: 'Laong-Laan' },
    { id: 3, title: 'Write new article', order: 3, completed: true, author: 'Agap-ito Bagumbayan' },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, author: 'Taga-Ilog' },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, author: 'Dimas-Ilaw' },
];

router.get("/read/:id", (req, res) => {
    const { id } = req.params;
    let book =books.find((item) => {
        return item.id === Number(id);
    });
    res.status(200).send(book ? book : "Record not found!");
  });

  router.post("/create/:id", (req, res) =>{
   
    let data = {
      id: req.body.id,
      title: req.body.title,
      order: req.body.order,
      completed:req.body.completed,
      author: req.body.author,
    };
    books.push(data);
    res.status(200).send( data );
  });

  router.put("/update/:id", (req, res)=>{
    const { id } = req.params;

    let book = books.find((item) => {
        return item.id === Number(id);
    });

    book.id = req.body.id;
    book.title = req.body.title;
    book.order = req.body.order;
    book.completed = req.body.completed;
    book.author= req.body.author;

    res.status(200).send( employee );

  });
    
 
  router.delete("/remove/:id",(req, res)=>{
    const { id } = req.params;
    books = books.filter(item=>item.id != Number(id));

    res.status(200).send("Record " + id + " has been deleted.");
   

  });


router.get("/", (req, res, next) => {
    res.send(books);
});

module.exports = router;