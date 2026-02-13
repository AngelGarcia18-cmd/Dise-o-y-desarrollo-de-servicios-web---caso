import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/perfil', authMiddleware, (req, res) => {
    res.json({
        ok: true,
        message: 'Ruta protegida',
        user: req.user
    });
});

export default router;