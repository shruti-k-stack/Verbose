import { type Request, type Response } from 'express';
import { User } from '../models/user.js';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists'});
        }

        const user = await User.create({ username, email, password });
        res.status(201).json({
            message: 'User succesfully regisered',
            user: {id: user._id, username: user.username, email: user.email}
        })
    } catch(error: any) {
        res.status(500).json({ message: error.message });
    }
};