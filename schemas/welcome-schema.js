const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const welcomeSchema = mongoose.Schema({
    _id: reqString,
    channelId: reqString,
    text: reqString,
})

const name = "welcome-command"
module.exports = mongoose.models[name] || mongoose.model(name, welcomeSchema, name)