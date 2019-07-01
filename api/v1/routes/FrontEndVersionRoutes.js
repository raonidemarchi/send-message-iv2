const router = require('express').Router();
const FrontEndVersionModel = require('../models/FrontEndVersionModel')();

/**
 * Exibe a versão mais atual do app front-end
 */
router.get('', (req, res) => {
	FrontEndVersionModel.findOne({}, (err, data) => {
    if (data === null) {
      FrontEndVersionModel.create({ version: 0 })
    }

    res.json(err || data);
  });
});

module.exports = router;