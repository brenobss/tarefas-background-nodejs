import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3,
        repeat: {
            every: 1,
            limit: 100
        },
        lifo: true
    },
    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'NENO <contato@insight.com.br',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de Usuário',
            html: `<h1>Olá, ${user.name}, você foi cadastrado com sucesso no nosso sistema.</h1>
            <p>Qualquer dúvida, fique a vontade para entrar em contato</p>`
        });
    },
};

