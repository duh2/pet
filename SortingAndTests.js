function test_sortByPriceAsc() {
    console.assert(arrayCompare(sortByPriceAsc([]), [])==true)
    console.assert(arrayCompare(sortByPriceAsc([{Price:0}]), [{Price: 0}])==true)
    console.assert(arrayCompare(sortByPriceAsc([{Price:1}, {Price: 42}]), [{Price:1}, {Price: 42}])==true)
    console.assert(arrayCompare(sortByPriceAsc([{Price:42}, {Price: 1}]), [{Price:1}, {Price: 42}])==true)
    console.assert(arrayCompare(sortByPriceAsc([{Price:1}, {Price: -1}]), [{Price:-1}, {Price: 1}])==true)
    console.assert(arrayCompare(sortByPriceAsc([{Price:3}, {Price: 2},{Price: 1}]), [{Price:1}, {Price: 2},{Price: 3}])==true)
    console.assert(arrayCompare(sortByPriceAsc([{Price: Number.MAX_VALUE},{Price: Number.MIN_VALUE}]), [{Price: Number.MIN_VALUE},{Price: Number.MAX_VALUE}])==true)
}
function test_sortByPriceDec() {
    console.assert(arrayCompare(sortByPriceDec([]), [])==true)
    console.assert(arrayCompare(sortByPriceDec([{Price:0}]), [{Price: 0}])==true)
    console.assert(arrayCompare(sortByPriceDec([{Price:1}, {Price: 42}]), [{Price:42}, {Price: 1}])==true)
    console.assert(arrayCompare(sortByPriceDec([{Price:42}, {Price: 1}]),[{Price:42}, {Price: 1}])==true)
    console.assert(arrayCompare(sortByPriceDec([{Price:1}, {Price: -1}]), [{Price:1}, {Price: -1}])==true)
    console.assert(arrayCompare(sortByPriceDec([{Price:3}, {Price: 2},{Price: 1}]), [{Price:3}, {Price: 2},{Price: 1}])==true)
    console.assert(arrayCompare(sortByPriceDec([{Price: Number.MAX_VALUE},{Price: Number.MIN_VALUE}]),[{Price: Number.MAX_VALUE},{Price: Number.MIN_VALUE}])==true)
}
function test_sortByModel() {
    console.assert(arrayCompare(sortByModel([]), [])==true)
    console.assert(arrayCompare(sortByModel([{Model:'a'}]), [{Model: 'a'}])==true)
    console.assert(arrayCompare(sortByModel([{Model:'a'}, {Model: 'b'}]), [{Model:'a'}, {Model: 'b'}])==true)
    console.assert(arrayCompare(sortByModel([{Model:'b'}, {Model: 'a'}]),[{Model:'a'}, {Model: 'b'}])==true)
    console.assert(arrayCompare(sortByModel([{Model:'b'}, {Model: 'c'},{Model: 'a'}]), [{Model:'a'}, {Model: 'b'},{Model: 'c'}])==true)
}
function runSortingTests() {
    test_sortByPriceAsc()
    test_sortByPriceDec()
    test_sortByModel()
}
function sortByPriceAsc(dataArray) {
    let linkedList = new LinkedList()
    for (let i = 0; i < dataArray.length; i++) {
        linkedList.addToTheEnd(dataArray[i])

    }
    for (let j = linkedList.getLength() - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            let elem = linkedList.getNodeByPosition(i)
            let nextElem = linkedList.getNodeByPosition(i+1)
            let attributes = new Map(Object.entries(elem))
            let nextAttributes = new Map(Object.entries(nextElem))
            if (attributes.get('Price') > nextAttributes.get('Price')){
                linkedList.insertInPosition(i+2, elem)
                linkedList.removeFromPosition(i)
            }
        }
    }
    for (let k=0; k<linkedList.getLength();k++){

        dataArray.splice(0,1)
    }
    for (let m = 0; m < linkedList.getLength(); m++) {

        dataArray.push(linkedList.getNodeByPosition(m))
    }
    return dataArray

}
function sortByPriceDec(dataArray) {
    let linkedList = new LinkedList()
    for (let i = 0; i < dataArray.length; i++) {
        linkedList.addToTheEnd(dataArray[i])
    }
    for (let j = linkedList.getLength() - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            let elem = linkedList.getNodeByPosition(i)
            let nextElem = linkedList.getNodeByPosition(i + 1)
            let attributes = new Map(Object.entries(elem))
            let nextAttributes = new Map(Object.entries(nextElem))
            if (attributes.get('Price') < nextAttributes.get('Price')) {
                linkedList.insertInPosition(i + 2, elem)
                linkedList.removeFromPosition(i)
            }
        }
    }
    for (let k=0; k<linkedList.getLength();k++){

        dataArray.splice(0,1)
    }
    for (let m = 0; m < linkedList.getLength(); m++) {
        dataArray.push(linkedList.getNodeByPosition(m))
    }
    return dataArray

}
function sortByModel(dataArray) {
    let linkedList = new LinkedList()
    for (let i = 0; i < dataArray.length; i++) {
        linkedList.addToTheEnd(dataArray[i])

    }
    for (let j = linkedList.getLength() - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            let elem = linkedList.getNodeByPosition(i)
            let nextElem = linkedList.getNodeByPosition(i+1)
            let attributes = new Map(Object.entries(elem))
            let nextAttributes = new Map(Object.entries(nextElem))
            if (attributes.get('Model') > nextAttributes.get('Model')){
                linkedList.insertInPosition(i+2, elem)

                linkedList.removeFromPosition(i)
            }
        }
    }
    for (let k=0; k<linkedList.getLength();k++){

        dataArray.splice(0,1)
    }
    for (let m = 0; m < linkedList.getLength(); m++) {

        dataArray.push(linkedList.getNodeByPosition(m))

    }
    return dataArray
}
function arrayCompare(firstArray,secondArray){
    let compareCount=0;
    for (let i=0; i<firstArray.length; i++){
        if (firstArray[i].Price == secondArray[i].Price && firstArray[i].Price!==undefined){
            compareCount++
        }
        if (firstArray[i].Model === secondArray[i].Model && firstArray[i].Model!==undefined){
            compareCount++
        }
    }
    if (compareCount==firstArray.length){
        return true
    } else {
        return false
    }
}