const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CONNECTION
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/spanish-padawan');


let eventSchema = new Schema({
  title: String,
  company: String,
  admins: [ObjectId],
  participants: [ObjectId]
});

let Event = mongoose.model('Event', event);

// Ejemplo de otro proyecto

// exports.findAllCards = (cb) => {
//   Card.find((err, cards) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       cb(null, cards);
//     }
//   })
// };

// exports.findAllQuestions = (cb) => {
//   Question.find((err, cards) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       cb(null, cards);
//     }
//   })
// };

// exports.createCards = (cards, cb) => {
//   Card.create(cards, cb);
// };

// exports.createQuestions = (questions, cb) => {
//   Question.create(questions, cb);
// };