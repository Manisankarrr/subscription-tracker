import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name:{type: String, required: [true, 'Subscription Name is required'], trim: true, minLength: 2, maxLength: 50},
    price:{type: Number, required: [true, 'Subscription Price is required'], min: [0, 'Price must be a greater number than 0']},
    currency:{type: String,enum:['USD', 'EUR', 'GBP', 'INR'] ,default:'INR'},
    frequency:{type: String, enum:['daily', 'weekly', 'monthly', 'yearly'], default:'monthly'},
    category:{type: String, enum:['sports','news','entertainment','education','health','other'],required: true, default:'sports'},
    paymentMethod:{type: String,trim:true, required: true},
    status:{type: String, enum:['active','inactive','expired'], default:'active'},
    startDate:{type: Date, required: true, validate:{
        validator: function(value) {
            return value <= new Date();
        },
        message: 'Start date must be in the past',
    }},
    renewalDate:{type: Date, validate:{
        validator: function(value) {
            return value >= this.startDate;
        },
        message: 'Renewal date must be greater than start date',
    }},
    user:{type: mongoose.Schema.Types.ObjectId, ref:'User', required: true, index: true},

}, {timestamps: true});

subscriptionSchema.pre('save', function(next) {
    if(!this.renewalDate){
        const reneqalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + reneqalPeriods[this.frequency]);
    }
        //Auto update the status if renewal date exceeded
        if(this.renewalDate < new Date()){
            this.status = 'expired';
        }

        next();
    });

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
