import { GifGridItem } from "../../components/GifGridItem";

const { shallow } = require("enzyme")

describe('Pruebas del componente GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'Una url';
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/>);

    test('debe mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe tener un parrafo', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

    test('debe tener la img igual al url y los props', () => {
        const img = wrapper.find('img');
        //console.log( img.props().src );
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    })
    
    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        //console.log( div.props() );
        expect( className.includes('animate__fadeIn') ).toBe(true);
        
    })
    
    
})
