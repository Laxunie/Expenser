import { Schema, model } from "mongoose";

interface Purchases{
    store: string,
    amountPayed: number,
    dateOfPurchase: Date,
}

const purchasesSchema = new Schema<Purchases>({
    store: { type: String, required: true },
    amountPayed: { type: Number, required: true },
    dateOfPurchase: { type: Date, required: true }
})

const Purchases = model<Purchases>('purchases', purchasesSchema);

export default Purchases;