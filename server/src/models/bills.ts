import { Schema, model } from "mongoose";

interface Bill{
    title: string,
    description?: string,
    expenses: object
}

const billSchema = new Schema<Bill>({
    title: { type: String, required: true },
    description: String,
    expenses: Object,
})

const Bill = model<Bill>('bills', billSchema);

export default Bill;
