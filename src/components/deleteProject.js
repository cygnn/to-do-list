import { loadSideBar } from "./loadSideBar";
import { test } from "./todo";

export function deleteProject(name, div){
    test.deleteProject(name);
    if(div !== null){
        div.remove();
    }
    loadSideBar();
}