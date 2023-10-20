let { people } = require('../data');

const updatePerson = (req, res)=>{
    const {id}= req.params;
    const{name}= req.body;
    const person =people.find((person)=>person.id===Number(id));

     if (!person) {
        return res.status(404).json({success:false, msg: 'No person with such id'});  
    };
const newPeople = people.map((person)=>{
if(person.id===Number(id)){
    person.name=name;
}
return person;
})
res.status(200).json({success:true, data:newPeople})
};

module.exports = updatePerson;
