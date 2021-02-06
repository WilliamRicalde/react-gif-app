import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function GifApp({ defaultCategories = [] }) {
   
   //const [categories, setCategories] = useState([ 'Pacific Rim' ])
    const [categories, setCategories] = useState( defaultCategories )
    

    return (
        <>
            <h2>Giphy API App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                { 
                    categories.map(category => 
                        <GifGrid 
                            key={ category }    
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    )
};

export default GifApp;