const Ticket = require("../module/tickets")


class MyDB {
    constructor() {
        this.tickets = []
    }

    // create a ticket
    /**
     * Create a ticket 
     * @param {String} username 
     * @param {number} price 
     * @returns {Ticket}
    */
    Create(username, price) {
        const ticket = new Ticket(username, price)
        this.tickets.push(ticket)
        return ticket;
    }
    /**
     * Create a maltipul ticket for single user
     * @param {String} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<Ticket>}   
    */
    // create a bulk ticket
    Bulk(username, price, quantity) {
        const result = [];
        for (let i = 0; i < quantity; i++) {
            const ticket = this.Create(username, price)
            this.tickets.push(ticket)
            result.push(ticket)
        }
        return result;
    }

    // find ticket 
    find() {
        return this.tickets;
    }

    /**
     * ticket Find by ticket id 
     * @param {String} ticketId
     * @returns {Ticket}
    */
    // find by ticket id 
    findById(ticketId) {
        const ticket = this.tickets.find(item => item.ticketId == ticketId);
        return ticket;
    }

    /**
     * ticket find by username 
     * @param {String} username 
     * @returns {Ticket}
    */
    // find by username 
    findByUsername(username) {
        const ticket = this.tickets.filter((item) => item.username == username);
        return ticket;
    }
    /**
     * update by username 
     * @param {String} username
     * @param {{username: String, price: number}} ticketBody
     * @returns {Ticket}  
    */
    // Update by username 
    UpdateByUsername(username, ticketBody) {
        const ticket = this.findByUsername(username)
        ticket.forEach(element => {
            element.username = ticketBody.username || element.username;
            element.price = ticketBody.price || element.price;
            element.UpdateAt = new Date();
        });
        return ticket;
    }
    /**
     * ticket update by ticketId
     * @param {String} ticketId 
     * @param {{username: String, price: number}} ticketBody 
     * @returns {Ticket}
    */
    // update by ticket id
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId);
        ticket.username = ticketBody.username || ticket.username;
        ticket.price = ticketBody.price || ticket.price;
        ticket.UpdateAt = new Date();
        return ticket;
    }

    /**
     * delete by username 
     * @param {String} username 
    */
    // delete by username 
    deleteByUsername(username) {
        const tickets = this.findByUsername(username)
        tickets.forEach((ticket)=>{
            this.deleteByid(ticket.ticketId)
        })
        return tickets;
    }
    /**
     * ticket delete by ticketId
     * @param {String} ticketId 
    */
    // delete by ticket id
    deleteByid(ticketId) {
        const ticketIndex = this.tickets.findIndex((item) => item.ticketId == ticketId);
        if (ticketIndex !== -1) {
            this.tickets.splice(ticketIndex, 1);
            return true;
        } else {
            return false;
        }
    }

    drow(winnerCount) {
        const winnerIndecies = new Array(winnerCount);
        let index = 0;
        while (index < winnerCount) {
            const winnerindex = Math.floor(Math.random() * this.tickets.length);
            if (!winnerIndecies.includes(winnerindex)) {
                winnerIndecies[index++] = winnerindex;
                continue;
            }
        }
        const winner = winnerIndecies.map((index) => this.tickets[index])
        return winner
    }

}


const myDB = new MyDB()

module.exports = myDB;


