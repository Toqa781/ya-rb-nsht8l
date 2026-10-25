import { mockApplications } from "./mockData";
import type { Application } from "./type";

const STORAGE_KEY= "trackora-applications-v1";

export function loadApplications():Application[]{
    try{
        const stored=localStorage.getItem(STORAGE_KEY);
        if(stored==null)return mockApplications;

        const data=JSON.parse(stored);
        return Array.isArray(data)?data:mockApplications;
    }catch{
        return mockApplications;
    }
}

export function saveApplications(applications:Application[]):void{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(applications));
}