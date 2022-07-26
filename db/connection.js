const mongoose = require('mongoose');
const db = 'mongodb+srv://myChatapp:NtxksWb5Eken1FIi@cluster0.1nbnl.mongodb.net/mytestApp?retryWrites=true&w=majority'

mongoose.connect(db , {
    
}).then(() => {
    console.log(`connection successfull`);
}).catch((e) => {
    console.log(`connection unsuccessfull`);
})