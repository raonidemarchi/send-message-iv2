const router = require('express').Router();
const ContactModel = require('../models/ContactModel')();

/**
 * Inserir novo contato
 */
router.post('', (req, res) => {
	ContactModel.findOne({ giveAwayNumber: { $ne: null }}, ['giveAwayNumber'], { sort: { giveAwayNumber: -1 } }, (err, lastRow) => {
		const giveAwayNumber = lastRow ? lastRow.giveAwayNumber : null;

		if (req.body.givewayParticipant) {
			req.body.giveAwayNumber = giveAwayNumber ? giveAwayNumber + 1 : 1;
		}

		ContactModel.create(req.body, (err, data) => {
			res.json(data);
		});
	});
});

/**
 * Listar todos os contatos
 */
router.get('', (req, res) => {
	ContactModel.find({}, (err, data) => {
		res.json(data);
	});
});

module.exports = router;