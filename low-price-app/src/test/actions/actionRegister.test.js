import { registerSync } from "../../Redux/actions/actionRegister"
import { typesRegister } from "../../Redux/types/types"

describe('Verificar acciones de Registro', () => {

    test('Validar Registro sincronico', () => {

        const email = '123'
        const pass = '123'
        const name = '123'

        const registerAction = registerSync(email, pass, name);

        expect(registerAction).toEqual({
            type: typesRegister.register,
            payload: {
                email,
                pass,
                name
            }
        })
    })
})