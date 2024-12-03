const mongoose = require ('mongoose');

const CarSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        enum: ['New', 'Used'], 
        required: true
    },
    pictures: {
        type: [String],
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Car', CarSchema)