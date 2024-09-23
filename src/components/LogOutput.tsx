import React from "react";


export default function LogOutput(props: {title: string, logs: string[]}) : React.ReactElement{
const {logs, title} = props;
    return(
        <div className="text-start px-3 flex flex-col gap-2 border-t-2 border-b-[1px] border-s-[1px] border-b-s-gray-100 border-e-2 border-e-gray-300 border-t-gray-400">
            <div className="sticky top-0 py-1">
                <span>!!!{title}!!!</span>
            </div>
            <div className="overflow-y-auto min-h-[100px] max-h-[300px]">
                <div>
                    {logs.map((each)=>(
                        <div key={each}>
                            {each}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
