export function storeData(obj){
    let obj_ser = JSON.stringify(obj);
    localStorage.setItem('myObj', obj_ser);
}