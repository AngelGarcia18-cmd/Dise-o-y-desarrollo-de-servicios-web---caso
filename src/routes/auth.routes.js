const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/login", login);
router.post("/register", register);
router.get("/perfil", authMiddleware, (req, res) => {
    return res.json({
        ok: true,
        message: "Ruta protegida",
        user: req.user
    });
});

module.exports = router;