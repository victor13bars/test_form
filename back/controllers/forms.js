const createForm = async (req, res) => {

    console.log(req.body)
    console.log(req.body.name)
    if (!req.body) {
        return res
            .status(400)
            .set({
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            })
            .json({
                status: 'error',
                message: 'Неправильная передача данных'
            })
    }

    try {
        res
            .status(201)
            .set({
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            })
            .json({
                status: 'success',
                message: 'Форма успешно отправлена'
            });
    } catch (error) {
        res
            .status(500)
            .json({
                status: 'error',
                message: 'Не удалось создать форму, повторите попытку'
            });
    }
};

module.exports = {createForm}