const createForm = async (req, res) => {

    const errors = {};

    if (!req.body.name) {
        errors.name = {message: 'Укажите Имя и Фамилию'}
    }

    if (!req.body.email) {
        errors.email = {message: 'Укажите email'}
    }

    if (!req.body.phone) {
        errors.phone = {message: 'Укажите номер телефона'}
    }

    if (!req.body.brithday) {
        errors.brithday = {message: 'Укажите дату рождения'}
    }

    if (!req.body.message) {
        errors.message = {message: 'Укажите сообщение'}
    }

    if (Object.keys(errors).length > 0) {
        return res
            .status(400)
            .json({
                status: 'error',
                ...errors
            })
    }

    try {
        res
            .status(201)
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