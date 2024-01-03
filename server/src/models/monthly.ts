import { Schema, model } from "mongoose";

interface Monthly{
    title: string,
    description?: string,
    expenses: object
}

const monthlySchema = new Schema<Monthly>({
    title: { type: String, required: true },
    description: String,
    expenses: Object,
})

const Monthly = model<Monthly>('monthly', monthlySchema);

export default Monthly;
