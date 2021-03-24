import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
    //const categories=['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Piece']);
 /*   const handleAdd=()=>{
        //setCategories(['One Piece',...categories]);
        setCategories(cats=>[...cats,'One Piece']);
    }*/
    return (
        <>
           <h2>GiftExpertApp</h2> 
           <AddCategory setCategories={setCategories}></AddCategory>
           <hr/>
           
        <ol>
            {
                categories.map(category=>(
/*                    <GifGrid 
                    key={category} 
                    category={category}
                    />                    
                ))*/
                    <GifGrid 
                    key={category}
                    category={category}></GifGrid>
                ))
            }
        </ol>
        </>
    )
}
