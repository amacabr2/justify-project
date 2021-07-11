import jwt from 'jsonwebtoken';
import {NextFunction, Request, Response} from "express";

const {JWT_SECRET} = process.env

export function signToken(email: string) {
    return jwt.sign(email, String(JWT_SECRET));
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.header('authorization')?.split(' ')[1];

    if(!token) {
        return res
            .status(401)
            .json({success: false, message: "No token provided"});
    }

    try {
        const decoded = jwt.verify(token, String(JWT_SECRET));
        if (decoded) {
            next();
        }
    } catch(err) {
        return res
            .status(401)
            .json({success: false, message: "Invalid token."});
    }
}
