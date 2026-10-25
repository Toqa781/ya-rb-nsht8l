import type {ReactNode }from "react";
import Card from "../../Components/UI/Card";


type StatCardProps={
    label:string;
    value:number;
    caption: string;
    icon: ReactNode;
}

function StatCard({label, value,caption,icon}:StatCardProps){
    return(
        <Card>
            <div className="flex items-start justify-between gap-2">
                <p className="text-sm text-muted">{label}</p>
                <span className="text-primary">{icon}</span>
            </div>
            <p className="mt-3 text-4xl font-semibold text-ink">{value}</p>
            <p className="mt-2 text-sm text-muted">{caption}</p>
        </Card>
    );
}
export default StatCard;