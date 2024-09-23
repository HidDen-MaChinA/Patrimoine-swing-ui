import React from 'react';

export default function CustomLegend (props : { datasets: any, onToggleDataset : (index:number)=>void}) : React.ReactElement{
    const {datasets, onToggleDataset} = props;
    console.log(datasets[0].borderColor)
  return (
    <div>
      {datasets.map((dataset:any, index:any) => (
        <div
          key={index}
          className="cursor-pointer flex justify-center align-center gap-3 flex-row"
          onClick={() => onToggleDataset(index)} // Call the toggle function on click
        >
          <div style={{ backgroundColor: dataset.borderColor }} className={`w-[20px] h-[20px]`}></div>
          <div>{dataset.label}</div>
        </div>
      ))}
    </div>
  );
};
