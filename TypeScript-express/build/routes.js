"use strict";
const express_1 = require("express");
const router = express_1.Router();
const person_1 = require("./controllers/person");
router.get('/', person_1.Get);
router.post('/', person_1.Post);
router.put('/', person_1.Put);
router.delete('/', person_1.Delete);
module.exports = router;
