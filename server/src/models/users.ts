import { Schema, model } from "mongoose";

interface Users{
    name: string,
    employer: string,
    monthlyIncome: number,
}

const usersSchema = new Schema<Users>({
    name: { type: String, required: true },
    employer: { type: String },
    monthlyIncome: { type: Number}
})

const Users = model<Users>('users', usersSchema);

export default Users;