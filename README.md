# Ticket_lottery_application


- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all tickets
- get ticket by id
- bulk buy (user can buy multiple tickets at a time)
- raffle draw


ticket information : 
- number(unique)
- username
- price 
- timestrap


Router: 

/ticket/t/:ticketId - GET- find ticket by ticketId;  
/ticket/t/:ticketId - PATCH- ticket update by ticketId;
/ticket/t/:ticketId - delete- ticket delete by ticketId
/ticket/u/:username - GET- find ticket by username;
/ticket/u/:username - PATCH - ticket update by username
/ticket/u/:username - delete - ticket delete by username
/ticket/sell - POST sell ticket 
/ticket/bulk - POST one user buy maltipul ticket;
/ticket/drow -  GET winner show
/ticket - GET find all ticket

