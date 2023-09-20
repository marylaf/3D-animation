const router = require('express').Router();

const { editCone } = require('../controllers/cone');

router.post('/triangulation', editCone);

module.exports = router;