function FrontEndVersionModel() {
	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;

	const _schema = {
		version: {
      type: Number,
      required: true
    },
	};

	const newSchema = new Schema(_schema, { versionKey: false });
	const newModel = process.connection.model('frontEndVersion', newSchema, 'frontEndVersion');

	return newModel;
}

module.exports = FrontEndVersionModel;