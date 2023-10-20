let { people } = require('../data');

const createPerson = (req,res)=>{
    const{name}=req.body;
    if (!name) {
        return res.status(400).json({success:false, msg: 'Enter the name'});  
    }
    res.status(201).json({Success:true, person:name});
};
module.exports = createPerson;
