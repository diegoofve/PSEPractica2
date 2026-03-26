import jwt from 'jsonwebtoken';
import { prisma } from '../lib/db';

export const login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({ where: { mail } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const token = jwt.sign(
        { sub:user.id, role: user.role},
        process.env.JWT_SECRET || 'mi clase secretaaa',
        { expiresIn: '8h' }
    )