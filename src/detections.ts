//similar occurrences 
function detectType(val: number | string){
    if( typeof val === 'string'){
        return val.toLowerCase()
    }
    return val + 3
    
}

function provideId(id: string | null){
    if( !id ){
        console.log('Please provide a valid id');
        return 

    }
    id.toLocaleLowerCase
}

//dont do this
