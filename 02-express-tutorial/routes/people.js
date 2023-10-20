const express=require('express');
const router = express.Router();

const { people }=require('../data');
const { getPeople, createPerson, updatePerson, deletePerson, createPersonPostman } = require('../controllers');



router.route('/').get(getPeople).post(createPerson);

// router.get('/', getPeople);

// router.post('/', createPerson);

router.route('/:id').put(updatePerson).delete(deletePerson);

// router.put('/:id', updatePerson);

// router.delete('/:id', deletePerson);

router.post('/postman', createPersonPostman);




module.exports = router;
