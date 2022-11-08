const express = require('express');
require('dotenv').config();
const notfound = require('./middleware/error/notfoundhandler.js');
const {CustomError, errorhandler} = require('./middleware/error/errorhandler.js');
//custom error handler for async error
require('express-async-errors');


const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());

app.use('/hello', (req,res,next)=>{
	//res.send("Hello from store api");
	return next(new CustomError("This is custom error handler", 204));
});

app.use(errorhandler);
app.use(notfound);

const start = async ()=>{
	try{
		const server = app.listen(PORT,()=>{
			console.log(`Server is listening on ${PORT} port`);
		})

	}catch(error){
		console.error(error);
	}
}

start();
