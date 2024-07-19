import { loadSideBar } from "./loadSideBar";
import { storeData } from "./storeData";
import { test } from "./todo";

export function deleteProject(name, div){
    test.deleteProject(name);
    storeData(test);
    if(div !== null){
        div.remove();
    }
    loadSideBar();
}