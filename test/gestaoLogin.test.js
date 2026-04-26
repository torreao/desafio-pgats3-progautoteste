import { fazerLogin } from '../src/gestaoLogin.js';
import assert from 'node:assert';

describe('Testes de Gestão de Login', function () {
    it('Validar a realização de um login com sucesso', function () {
        const resultado = fazerLogin('claudiat@email.dev', '123');
        assert.equal(resultado, 'Login realizado com sucesso');
    });

    it('Validar a tentativa de login com usuário expirado', function () {
        const resultado = fazerLogin('marcelo@teste.com.br', 'senha1234');
        assert.equal(resultado, 'Renove suas credenciais');
    });

    it('Validar a tentativa de login com usuario não encontrado', function () {
        const resultado = fazerLogin('inexistente@teste.com', 'inexistente');
        assert.equal(resultado, 'Usuário não encontrado');
    });

    it('Validar a tentativa de login com senha incorreta', function () {
        const resultado = fazerLogin('paulo123@teste.com', 'senhaerrada1234');
        assert.equal(resultado, 'As credenciais estão incorretas');
    });
});