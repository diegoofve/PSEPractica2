import { Request, Response, NextFunction } from "express";
import { Role } from "../../generated/prisma";

export const authorize = (allowedRoles: Role[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        // req.user es inyectado por Passport
        const user = req.user as any;
        if (!user || allowedRoles.includes(user.role)) {
            res.status(403).json({ error: 'No tienes permiso para acceder a este endpoint' });
        }
        next();
    }
}