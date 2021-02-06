import { shallow } from "enzyme"
import GifApp from "../GifApp"

describe('Pruebas en el Gifapp', () => {
    test('debe hacer match con el snapshot', () => {
        const wrapper = shallow(<GifApp />);

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar dos elementos', () => {
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow( <GifApp defaultCategories={categories} />)

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
    
})
