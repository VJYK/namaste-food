const ItemList = ({items})=>{
   
    const styleCss ={
        listStyletype:"none"
    }
    return <>
        <ul>
            { items.map(item=> <li style={styleCss} key={item.id} >{item.card.info.name}</li>) }
        </ul>
    </>
        
}
export default ItemList;