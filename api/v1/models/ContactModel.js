function ContactModel() {
	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;

	const _schema = {
		name: { type: String, required: true },
		phone: { type: String, required: true },
		company: { type: String, required: true },
		givewayParticipant: { type: Boolean, required: true },
		giveAwayNumber: { type: Number, required: false, default: null },
	};

	const newSchema = new Schema(_schema, { versionKey: false });
	const newModel = process.connection.model('contact', newSchema);

	return newModel;
}

module.exports = ContactModel;