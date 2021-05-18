const myFuncionAsincrona = () =>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('Algo asincrono'),2000)
        : reject(new Error('Test Error'))
    });
}

const asinc = async()=>{
    const algo = await myFuncionAsincrona();
    console.log(algo);
}

console.log('Antes de asinc');
asinc();
console.log('Despues de asinc');


const otraFuncion = async() => {
    try {
        const algo = await myFuncionAsincrona();
        console.log(algo);
    } catch (error) {
        console.log(error);
    }
}

console.log('Antes de otraFuncion');
otraFuncion();
console.log('Despues de otraFuncion');

