var fromDB = new connect('mongodb+srv://raoni:sda3211sad@cluster0-cvpz9.mongodb.net/send-message-iv2?retryWrites=true&w=majority');
var toDB = new connect('mongodb://localhost:27017/send-message-iv2');
var contacts = fromDB.contacts.find().toArray();

toDB.contacts.save(contacts);