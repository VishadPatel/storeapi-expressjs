const notfound = (req, res, next)=>{
	res.status(404).json({message : 'Rquested resource is not found'});
}

module.exports = notfound;
