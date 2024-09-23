import React from "react";
import LogOutput from "./LogOutput";

export default function Outputs() : React.ReactElement{
    return (
        <div className=" w-full gap-1 h-[400px] flex flex-col overflow-y-auto">
            <LogOutput title="FLUX IMPOSSIBLE" logs={["zavatra","zavatra hava"]}/>
            <LogOutput title="FLUX JOURNALIER" logs={["zavatra","zavatra hava"]}/>
        </div>
    )
}

