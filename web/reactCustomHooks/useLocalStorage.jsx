const storage = window.localStorage;

const getData = (key) => {
    if(check(key))
        console.log(storage.getItem(key));
    else
        console.log("Not found");
}

const getObject = (key) => {
    if (check(key))
        console.log(JSON.parse(storage.getItem(key)));
    else
        console.log("Not found");
}

const setData = (key, value) => {
    storage.setItem(key, value);
}

const setObject = (key, value) => {
    storage.setItem(key, JSON.stringify(value));
}

const remove = (key) => {
    checkData(key) && storage.removeItem(key);
}

const check = (key) => {
    let exist = storage.getItem(key);
    return !!exist;
}

const useLocalStorage = () => {
  return { getData, setData, setObject, getObject, remove, check }
}

export default useLocalStorage;
