import mongoose from "mongoose";

const resortSchema = new mongoose.Schema({
    resortName: { type: String, required: true},
    city: { type: String, required: true},
    country: { type: String, required: true},
    temperature: { type: String, required: true},
    moisture: { type: String, required: true},
    wind: { type: String, required: true},
    imageUrl: { type: String, required:true },
    lastUpdated: { type:Date , required: true },
    photo1: { type:String },
    photo2: { type:String },
    photo3: { type:String },
})

const Resort = mongoose.model("Resort", resortSchema);

export default Resort;
