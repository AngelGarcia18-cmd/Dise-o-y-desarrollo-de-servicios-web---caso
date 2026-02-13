const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        if (!nombre || !email || !password) {
            return res.status(400).json({
                ok: false,
                message: "Todos los campos son obligatorios"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                ok:false,
                message: "El usuario ya existe"
            });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            nombre,
            email,
            passwordHash
        });

        await newUser.save();

        return res.status(201).json({
            ok: true,
            message: "Usuario registrado correctamente"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            message: "Error interno del servidor"
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                ok: false,
                message: "Email y password son obligatorios"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                ok: false,
                message: "Credenciales inválidas"
            });
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash);

        if (!isMatch) {
            return res.status(401).json({
                ok: false,
                message: "Credenciales inválidas"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                rol:user.rol
            },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        return res.json({
            ok: true,
            message: "Login exitoso",
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            message: "Error interno del servidor"
        });
    }
};

module.exports = {
    register,
    login
};