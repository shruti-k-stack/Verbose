import { Schema, model, type InferSchemaType } from "mongoose";

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false},
    role: {type: String, enum: ["user", "admin"], default: "user"},
}, {
    timestamps: true
});

export type IUser= InferSchemaType<typeof userSchema>;

export const User= model<IUser>("User", userSchema);