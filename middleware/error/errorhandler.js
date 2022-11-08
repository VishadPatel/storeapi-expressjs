class CustomError extends Error{
	constructor(message, statusCode){
		super(message);
		this.statusCode = statusCode;
	}
}
const errorhandler = (err,req,res,next)=>{
	if(err instanceof CustomError){
		console.error(err.statusCode, err.message);
		res.status(err.statusCode).json({message : err.message});
	}else{
		res.status(500).json({message : 'Internal Server Error, please try after sometime!!'})
	}
}

module.exports = {errorhandler, CustomError};
