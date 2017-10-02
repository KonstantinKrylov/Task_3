function waterFall(full, empty){

    if(empty.length === 0 || full.length === 0) return;

    empty = empty.map(function(item){
        return {"capacity": item}
    });

    let fullNumber = 0,
        emptyNumber = 0,
        activeFullBalance = full[fullNumber],
        activeEmptyCapacity = empty[emptyNumber].capacity;


    while(emptyNumber < empty.length && fullNumber < full.length){

        if(activeFullBalance === 0) activeFullBalance = full[fullNumber];
        if(activeEmptyCapacity === 0) activeEmptyCapacity = empty[emptyNumber].capacity;

        if(activeEmptyCapacity <= activeFullBalance){
            activeFullBalance = activeFullBalance - activeEmptyCapacity;
            empty[emptyNumber][`from ${fullNumber + 1} bottle`] = `${activeEmptyCapacity} liter(s)`;
            activeEmptyCapacity = 0;
        }

        if(activeEmptyCapacity > activeFullBalance){
            activeEmptyCapacity = activeEmptyCapacity - activeFullBalance;
            empty[emptyNumber][`from ${fullNumber + 1} bottle`] = `${activeFullBalance} liter(s)`;
            activeFullBalance = 0;
        }

        if(activeFullBalance === 0)   fullNumber++;
        if(activeEmptyCapacity === 0) emptyNumber++;

    }

    return empty;
}

exports.waterFall = waterFall;