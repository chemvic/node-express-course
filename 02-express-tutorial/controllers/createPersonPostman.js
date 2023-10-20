let { people } = require('../data');

const createPersonPostman = (req,res)=>{
    const{name}=req.body;
    if (!name) {
        return res.status(400).json({success:false, msg: 'Enter the name'});  
    }
    res.status(201).json({Success:true, data:[...people, name]});
};
module.exports = createPersonPostman;