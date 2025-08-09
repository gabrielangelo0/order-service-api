let orders = [];

const createOrderService = (req, res) => {
    const {
        title,
        client,
        description,
        priority,
        category,
        estimatedHours,
        responsible,
        dueDate,
        note,
        status,
        technician
    } = req.body;
    const order = {
        id: orders.length + 1,
        title,
        client,
        description,
        priority,
        category,
        estimatedHours,
        responsible,
        dueDate,
        note,
        status,
        technician,
        createdAt: new Date()
    };

    orders.push(order);
    return res.status(201).json(order);
}

const getAllOrdersService = (req, res) => {
    // Simula a busca de todas as ordens de servico
    res.status(200).json(orders);
}

module.exports = {
    createOrderService,
    getAllOrdersService
};