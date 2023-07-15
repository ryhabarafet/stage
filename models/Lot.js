const db = require('../config/db');

class Lot {
  static getAllLots(callback) {
    db.query('SELECT * FROM lot', callback);
  }

  static getLotById(id, callback) {
    db.query('SELECT * FROM lot WHERE id_lot = ?', [id], callback);
  }

  static createLot(data, callback) {
    db.query('INSERT INTO lot SET ?', data, callback);
  }

  static updateLot(id, data, callback) {
    db.query('UPDATE lot SET ? WHERE id_lot = ?', [data, id], callback);
  }

  static deleteLot(id, callback) {
    db.query('DELETE FROM lot WHERE id_lot = ?', [id], callback);
  }
}

module.exports = Lot;
