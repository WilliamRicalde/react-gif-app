import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con el getGifs', () => {
    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifs('Pacific Rim');

        expect( gifs.length ).toBe(10);
    });

    test('no debe traer elementos', async() => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe(0)
    })
    
    
})
