const promesa1 = ()=>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Promesa resuelta!')
        } else {
            reject('Error de promesa1');
        }
    });
}

promesa1()
.then(response => console.log(response))
.catch(err => console.error(err));

promesa2 = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000);
        }else {
            const error = new Error('Error de promesa2')
            reject(error);
        }
    });
}

promesa2()
.then(response => console.log(response))
.catch(err => console.error(err));


Promise.all([promesa1(), promesa2()])
.then(response=>{
    console.log('Array of results', response);
})
.catch(error => {
    console.error(err);
})