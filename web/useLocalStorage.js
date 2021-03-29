import {useState} from 'react';
const storage = window.localStorage;

export default function useLocalStorage() {
    return { getData, setData, setObject, getObject, remove, check }
}

function getData(key) {
    if(check(key))
        console.log(storage.getItem(key));
    else
        console.log("Not found");
}

function getObject(key) {
    if (check(key))
        console.log(JSON.parse(storage.getItem(key)));
    else
        console.log("Not found");
}

function setData(key, value) {
    storage.setItem(key, value);
}

function setObject(key, value) {
    storage.setItem(key, JSON.stringify(value));
}

function remove(key) {
    checkData(key) && storage.removeItem(key);
}

function check(key) {
    let exist = storage.getItem(key);
    return exist ? true : false;
}


