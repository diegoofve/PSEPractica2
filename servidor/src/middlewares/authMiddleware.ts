import { Request, Response, NextFunction } from "express";
import { Role } from "../../generated/prisma";

export const authorize = (requiredRole: Role) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user as any;

        if (!user || !allowedRoles.includes(user.role)) {
            return res.status(403).json({ 
                message: "No tienes permiso para acceder a este recurso" });
        }
        next();
    };
};