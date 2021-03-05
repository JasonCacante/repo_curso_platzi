console.log("Jason")
const add = async function (a, b){
    if (a < b) throw new Error('Not supported')
    return a + b
}

const result = await add(1221, 3)
result 
