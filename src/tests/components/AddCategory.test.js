import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });

    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar el input', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value: value } });
    });

    test('no debe de postear la info on submit', () => {
       wrapper.find('form').simulate('submit', { preventDefault(){} }); 

       expect( setCategories ).not.toHaveBeenCalled();
    }); 
    
    test('debe de limpiar el input', () => {
        const value = 'Hola mundo';
        
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toBeCalledWith( expect.any(Function) );
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    
    
})
