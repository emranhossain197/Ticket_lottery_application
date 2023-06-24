const router = require("express").Router();
const ticketHanlder = require('../controller/ticket')


router.route("/ticket/t/:ticketId")
    .get(ticketHanlder.findTicketByTicketId)
    .patch(ticketHanlder.updateTicketByTicketId)
    .delete(ticketHanlder.deleteTicketByTicketId)

    
router.route("/ticket/u/:username")
    .get(ticketHanlder.findTicketByUser)
    .patch(ticketHanlder.updateTicketByUser)
    .delete(ticketHanlder.deleteTicketByUser)


router.post("/ticket/sell", ticketHanlder.createTicket)
router.post("/ticket/bulk", ticketHanlder.createBulk)
router.get("/ticket/drow", ticketHanlder.createDrow)
router.get("/ticket", ticketHanlder.findAllTicket)

router.get("/health", (_req, res) => {
    res.status(200).json({ message: "Success" })
})

module.exports = router;