/**
 * It represents a flight
 * @typedef {Object} Flight
 * @property {String} origin
 * @property {String} destination
 * @property {Date} flightDate
 * @property {number} price
 */

/**
 * It represents a User
 * @typedef {Object} User
 * @property {ObjectId} _id mongo id
 * @property {string} document document id of user
 * @property {number} age age of user
 */

/**
 * It represents a reservation
 * @typedef {Object} Reservation
 * @property {ObjectId} userId
 * @property {ObjectId} flightId
 * @property {number} cost
 * @property {number} extraCost
 */

/**
 * It represents a reservation
 * @typedef {Object} ReservationConsolidate
 * @property {ObjectId} userId
 * @property {ObjectId} flightId
 * @property {number} cost
 * @property {number} extraCost
 * @property {User} user
 * @property {Flight} flight
 */

/**
 * It represents a reservation
 * @typedef {Object} ObjectId
 * @property {*} _id id of mongodb
 */
