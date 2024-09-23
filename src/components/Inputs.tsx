import React from "react";

export default function Inputs(): React.ReactElement{
    const categories = ["Agregat", "Tresorerie", "Immobilisation", "Obligations"]
    return(
    <div className="flex flex-col gap-2 bg-gray-100 p-3 rounded-lg">
        <div className="flex flex-row justify-between">
            <div>
                <span>Patrimoine: </span>
                <select name="" id="" className="px-2 border-[1px] border-slate-800 rounded-lg">
                    <option value="cresus">cresus</option>               
                </select>
            </div>
            <div className="text-yellow-500">
                <h1>Entrees</h1>
            </div>
        </div>
        <div className="flex flex-row gap-3">
            {categories.map((each) =>( 
                <div className="flex flex-row gap-2">
                    <input key={each} type="checkbox" value={each} />
                    <label htmlFor="">{each}</label>
                </div>
            ))}
        </div>        
        <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-1">
                <span>
                    de
                </span>
                <input type="date" className="border-[1px] border-slate-800 rounded-md" />
            </div>
            <div className="flex flex-row gap-1">
                <span>
                    a
                </span>
                <input type="date" className="border-[1px] border-slate-800 rounded-md" />
            </div>
        </div>
    </div>
    )
}
