import { Schema, model } from "mongoose";

interface Category{
    title: string,
    description?: string
}

const categorySchema = new Schema<Category>({
    title: { type: String, required: true },
    description: String,
})

const categoryModel = model<Category>('categories', categorySchema);

export default categoryModel;
