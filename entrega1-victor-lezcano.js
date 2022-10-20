class Contenedor {
    #array;
    constructor() {
        this.#array

    }
save(title, price, url){
    const obj ={
        title: title,
        price:price,
        thumbnail: url,
    };
    try {
        if(this.#array.length === 0){
            obj.id=1;
            this.#array.push(obj);
        }else{
        obj.id = this.#array[this.#array.length -1].id + 1;
        this.#array.push(obj);
    }
}catch (error){
    console.log(error);
} return obj.id;
    } 
getById(id){
    try{
        const array = JSON.parse(result);
        if (array.length > 0){
            if (!array.find(element => element.id === id)) 
            { console.log("No existe este ID");
            }else{
                const obj =array.find(element => element.id === id);
                console.log("El objeto es:")
                console.log(obj)
            }
        }
    } catch (error){
        console.error(error);
    }

}
getAll (){
    try{
        const array = JSON.parse(result);
        console.log("El archivo contiene:")
        console.log(array);
            }catch (error){
                console.log(error)
            }
}

deleteById(id){
    try{
        const array = JSON.parse(result);
        if (array.find(element =>element.id === id)){
            const arr =array.filter(element => element.id !== id);
            console.log("Objeto eliminado. Nuevo array:")
            console.log(arr)
        } else{
            console.log("No existe el ID buscado");
        }
    } catch (error){
        console.error(error);
    }
}

deleteAll () {
    try {
        console.log ("Borrando todo");
            }catch (error){
                console.error(error);
            }
}


}
