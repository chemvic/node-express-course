let { people } = require('../data');

const deletePerson = (req,res)=>{
    const{id}= req.params;
    const{name}=req.body;
    const person =people.find((person)=>person.id===Number(id));
     if (!person) {
            return res.status(404).json({success:false, msg: 'No person with such id'});  
        };
    const newPeople = people.filter((man)=>man!==person);
    const indexPersonForDelete= people.findIndex((man)=>man===person);
    const deleted = people.splice(indexPersonForDelete,1);
    res.status(200).json({msg: 'successfully deleted', name: person, people})
    
    };

    module.exports = deletePerson;