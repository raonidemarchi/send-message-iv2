const router = require('express').Router();
const ContactModel = require('../models/ContactModel')();

/**
 * Inserir novo contato
 */
router.post('', (req, res) => {
	ContactModel.findOne({ giveawayNumber: { $ne: null }}, ['giveawayNumber'], { sort: { giveawayNumber: -1 } }, (err, lastRow) => {
		const giveawayNumber = lastRow ? lastRow.giveawayNumber : null;

		if (req.body.givewayParticipant) {
			req.body.giveawayNumber = giveawayNumber ? giveawayNumber + 1 : 1;
    }
    
		ContactModel.create(req.body, (err, data) => res.json(err || data));
	});
});

/**
 * Listar todos os contatos
 */
router.get('', (req, res) => {
	ContactModel.find({}, null, { sort: { createdDate: -1 } }, (err, data) => (
    res.json(err || data))
  )
});

module.exports = router;