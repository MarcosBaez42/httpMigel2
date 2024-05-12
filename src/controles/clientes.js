import cliente from "../modulos/clientes.js"
const httpClientes = {
    listarTodosClientes: async (req, res) => {
        try {
            const clientes = await cliente.find()
            res.json({ clientes })
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    listarPorIdCliente: async (req, res) => {
        const { id } = req.params
        try {
            const cliente = await cliente.findById(id)
            if (cliente)
                res.json({ cliente })
            else
                res.status(400).json({ msg: "Cliente no encontrado" })
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    listarClienteActivo: async (req, res) => {
        try {
            const clientes = await cliente.find({ estado: 1 })
            res.json({ clientes })
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    listarClienteInactivo: async (req, res) => {
        try {
            const clientes = await cliente.find({ estado: 0 })
            res.json({ clientes })
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    insertarCliente: async (req, res) => {
        try {
            const { nombre, apellido, email, telefono, direccion, estado } = req.body
            const cliente = new cliente({ nombre, apellido, email, telefono, direccion, estado })
            await cliente.save()
            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    modificarCliente: async (req, res) => {
        try {
            const { id } = req.params
            const { nombre, apellido, email, telefono, direccion, estado } = req.body
            const cliente = await cliente.findByIdAndUpdate(id, { nombre, apellido, email, telefono, direccion, estado })
            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    activarCliente: async (req, res) => {
        try {
            const { id } = req.params
            const cliente = await cliente.findByIdAndUpdate(id, { estado: 1 })
            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    desactivarCliente: async (req, res) => {
        try {
            const { id } = req.params
            const cliente = await cliente.findByIdAndUpdate(id, { estado: 0 })
            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }

    }
}

export default httpClientes;