const shotid = require("shortid")

class Ticket {
    /**
     * create a ticket class 
     * @param {String} username
     * @param {number}  price 
    */
    constructor(username, price) {
        this.ticketId = shotid.generate();
        this.username = username;
        this.price = price;
        this.startAt = new Date();
        this.UpdateAt = new Date();
    }
}

module.exports = Ticket;
