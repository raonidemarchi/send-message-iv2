function ContactModel() {
	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;

	const _schema = {
		name: {
      type: String,
      required: true
    },
		phone: {
      type: String,
      required: true
    },
		company: {
      type: String,
      required: true
    },
		givewayParticipant: {
      type: Boolean,
      required: true
    },
    giveawayNumber: {
      type: Number,
      required: false,
      default: null
    },
    createdDate: {
      type: Date,
      required: false,
      select: false,
      default: Date.now
    },
	};

	const newSchema = new Schema(_schema, { versionKey: false });
	const newModel = process.connection.model('contact', newSchema);

	return newModel;
}

module.exports = ContactModel;