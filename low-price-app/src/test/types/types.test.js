import { typesEstaciones, typesFavoritos, typesLogin, typesOcupacionEstaciones, typesRegister } from "../../redux/types/types"

describe('Verificar types', () => {
    test('comparar objetos', () => {

        expect(typesLogin).toEqual({
            login: 'login',
            logout: 'logout',
        })

        expect(typesRegister).toEqual({
            register: 'register'
        })

        expect(typesEstaciones).toEqual({
            add: 'addEstacion',
            list: 'listEstaciones',
            edit: 'editEstacion',
            delete: 'deleteEstacion',
            detail: 'detailEstacion',
            search: 'searchEstacion'
        })

        expect(typesFavoritos).toEqual({
            add: 'addFavorito',
            list: 'listFavoritos',
            edit: 'editFavorito',
            delete: 'deleteFavorito',
            detail: 'detailFavorito',
            search: 'searchFavorito'
        })

        expect(typesOcupacionEstaciones).toEqual({
            add: 'addOcupacionEstacion',
            list: 'listOcupacionEstaciones',
            edit: 'editOcupacionEstacion',
            delete: 'deleteOcupacionEstacion',
            detail: 'detailOcupacionEstacion',
            search: 'searchOcupacionEstacion'
        })
    })
})