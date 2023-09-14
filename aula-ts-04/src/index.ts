function printId(id: number | string): void{

    if(typeof id === "string") {
        console.log(`Your id is ${id.toUpperCase()}`)
    }else{
        console.log(`Your id is ${id}`)
    }
    

}




printId(1)
printId("idnqiwq1")