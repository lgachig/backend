const { Router } = require('express');
const express = require('express');
const router = express.Router();
const {getBanseguContenido, getCombancoPestaniasInstituciones, getEduFinCourses} = require('../controllers/finclu');

const {addBanseguContenido, addCombancoInstitucion, addEduFinCourses, addCombancoPestanias} = require('../controllers/finclu');

router.route('/combanco/ban-segu').get(getBanseguContenido);
router.route('/combanco/inspes').get(getCombancoPestaniasInstituciones);
router.route('/eduFin/courses').get(getEduFinCourses);

router.route('/ban-segu').post(addBanseguContenido);
router.route('/combanco/bancos').post(addCombancoInstitucion);
router.route('/combanco/pestanias').post(addCombancoPestanias);
router.route('/eduFin/courses').post(addEduFinCourses);
    
module.exports = router;