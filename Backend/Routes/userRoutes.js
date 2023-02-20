const express = require("express");
const router = express.Router();
const {signupMiddleware, signinMiddleware, deleteMiddleware, updateMiddleware} = require("../Validation/validation");

// var bodyParser = require('body-parser');
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

const {displayForm,controlInsertData,controlFetchData,controlUpdateData,controlDeleteData,controlCheckData} = require ('../Controller/userController');

router.get('/', displayForm);
router.get('/fetch', controlFetchData);
router.post('/insert', signupMiddleware, controlInsertData);
router.post('/update', updateMiddleware,controlUpdateData);
router.delete('/delete', deleteMiddleware, controlDeleteData);
router.post('/login', signinMiddleware, controlCheckData);

module.exports = router;