import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs")

describe('pruebas del GifGrid', () => {
    const category = "Hola mundo";

    test('debe hacer match con el sanpshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category }/>);
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan imagenes', () => {
        const gifs = [{
            id: 'abc',
            url: 'https://google.com',
            title: 'cualquier cosa'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category }/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    
})
