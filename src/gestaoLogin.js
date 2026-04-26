/* Desafio Valendo 2 Pontos na Nota Final

Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.

Desafio:
Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais

*/

const usuariosLogin = [
    {
        id: 1,
        nome: 'Marcelo Torreao',
        email: 'marcelo@teste.com.br',
        senha: 'senha1234',
        expirado: true
    },
    {
        id: 2,
        nome: 'Paulo Torreao',
        email: 'paulo123@teste.com',
        senha: 'padrao0000',
        expirado: false
    },
    {
        id: 3,
        nome: 'Claudia Torreao',
        email: 'claudiat@email.dev',
        senha: '123',
        expirado: false
    }
];

export function fazerLogin(email, senha) {
    for (let i = 0; i < usuariosLogin.length; i++) {
        if (usuariosLogin[i].email == email) {
            if (usuariosLogin[i].senha == senha) {
                if (usuariosLogin[i].expirado == true) {
                    return "Renove suas credenciais";
                }
                return "Login realizado com sucesso";
            } else {
                return "As credenciais estão incorretas";
            }
        }
    }
    return "Usuário não encontrado";
}