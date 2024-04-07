import User from '../models/user.model.js';

export async function createUser(req, res) {
    try {
        const newUser = new User(req.body);
        const userSaved = await newUser.save();
        res.status(201).json({
            message: "Usuario creado exitosamente!",
            data: userSaved
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json({
            message: "Lista de usuarios",
            data: users
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateUser(req, res) {
    try {
        const id = req.params.id;
        const user = req.body

        const userMod = await User.findByIdAndUpdate(id, user, {new: true});

        if(!userMod){
            res.status(404).json({
                message:"Usuario no encontrado",
                data: null
            })
            return;
        }

        res.status(200).json({
            message: "Usuario actualizado correctamente!",
            data: userMod
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteUser(req, res) {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        
        if(!user){
            return res.status(404).json("Usuario no encontrado")
        }

        res.status(200).json({
            message: "Usuario eliminado exitosamente!",
            data: user
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}