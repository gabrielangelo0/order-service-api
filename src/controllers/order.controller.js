const createOrderService = (req, res) => {
    // Simula a criacao de uma ordem de servico
    const order = {
        client: "Cliente Exemplo",
        status: "Pendente",
        type: "Manutencao",
        budget: 100,
    };

    return res.status(201).json(order);
}

const getAllOrdersService = (req, res) => {
    const orders = [];

    // Simula a busca de todas as ordens de servico
    res.status(200).json(orders);
}

module.exports = {
    createOrderService,
    getAllOrdersService
};