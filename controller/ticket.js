const MyDB = require('../db/db')

const ticketHanlder = {}

ticketHanlder.createTicket = (req, res) => {
    const { username, price } = req.body;
    const ticket = MyDB.Create(username, price)
    res.status(201).json(ticket)

}
ticketHanlder.createBulk = (req, res) => {
    const { username, price, quantity } = req.body;
    const ticket = MyDB.Bulk(username, price, quantity)
    res.status(201).json(ticket)
}
ticketHanlder.createDrow = (req, res) => {
    const winnerCount = req.query.mc || 2;
    const win = MyDB.drow(winnerCount)
    res.status(200).json(win);

}
ticketHanlder.findAllTicket = (_req, res) => {
    const allTicket = MyDB.find()
    res.status(200).json(allTicket)
}
ticketHanlder.findTicketByUser = (req, res) => {
    const username = req.params.username;
    const ticket = MyDB.findByUsername(username);
    res.status(200).json(ticket)

}
ticketHanlder.updateTicketByUser = (req, res) => {
    const username = req.params.username;
    const ticket = MyDB.UpdateByUsername(username, req.body);
    res.status(200).json(ticket)

}
ticketHanlder.deleteTicketByUser = (req, res) => {
    const username = req.params.username;
    const ticket = MyDB.deleteByUsername(username)
    res
        .status(203)
        .json({ message: 'Deleted Successfully by username', ticket });
}
ticketHanlder.findTicketByTicketId = (req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = MyDB.findById(ticketId);
    res.status(200).json(ticket)

}
ticketHanlder.updateTicketByTicketId = (req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = MyDB.updateById(ticketId, req.body);
    res.status(200).json(ticket)

}

ticketHanlder.deleteTicketByTicketId = (req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = MyDB.deleteByid(ticketId)
    if (ticket) {
        res.status(200).json({ message: "ticket deleted successfuly!" })
    } else {
        res.status(400).json({ message: "There are problem. ticket not deleted!" })
    }
}


module.exports = ticketHanlder;