const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const dotenv=require('dotenv');
dotenv.config()
app.use(cors());
app.use(express.json());
// Connexion à la base données
mongoose.connect(process.env.DATABASE)
.then(() => {console.log("DataBase Successfully Connected");
}).catch(err => {
console.log('Unable to connect to database', err);
process.exit();
});
// Connexion au serveur
app.listen(process.env.PORT, () => {
console.log("Server is listening on port 3001"); });
app.post("/",(req,res)=>{
    console.log(req.body);
});
const categorieRouter =require("./routes/categories.route")
app.use('/api/categories',categorieRouter);
const scategorieRouter =require("./routes/scategories.route")
app.use('/api/scategories', scategorieRouter);
const articleRouter =require("./routes/article.route")
app.use('/api/articles', articleRouter);
const userRouter =require("./routes/user.route")
app.use('/api/users', userRouter);



