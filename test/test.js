const MyDB = require("../db/db");


MyDB.Create("user 1", 10);
MyDB.Create("user 2", 10);
MyDB.Create("user 3", 10);
MyDB.Create("user 4", 10);
MyDB.Create("user 5", 10);
MyDB.Create("user 6", 10);

const bulk =  MyDB.Bulk("test", 10, 4);
console.log("bulk ticket:", bulk);
const allTicket = MyDB.find()
console.log("All ticket", allTicket);

const win = MyDB.drow(2)

console.log(win);


