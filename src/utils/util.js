


export const csvToJSON = ( historicalData) => {
        const data=historicalData.map(item=>{
                 const parsedItem= item.replace(/,+$/, "").split(",")
                 const date=new Date(parsedItem[0]*1000);
                 const rest=parsedItem.slice(1,5);
                 return {x:date,y:rest}
        })
        return data;
};