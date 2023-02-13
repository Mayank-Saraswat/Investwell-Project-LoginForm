const express = require("express");
const router = express.Router();

// var bodyParser = require('body-parser');
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

const {displayForm,controlInsertData,controlFetchData,controlUpdateData,controlDeleteData} = require ('../Controller/userController');

router.get('/', displayForm);
router.get('/fetch', controlFetchData);
router.post('/insert', controlInsertData);
router.post('/update', controlUpdateData);
router.delete('/delete', controlDeleteData);

module.exports = router;