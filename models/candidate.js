const mongoose = require('mongoose')

const CandidateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    party:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    votes:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "User"
            },
            votedAt:{
                type:{
                    type: Date,
                    default: DataTransfer.now()
                }
            }
        }
    ],
    voteCount:{
        type: Number,
        default: 0
    }
})

const Candidate = mongoose.model('Candidate', CandidateSchema)
module.exports = Candidate