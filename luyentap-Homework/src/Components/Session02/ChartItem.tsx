import React from 'react'

interface ChartItemProps {
    legend: string;
    percent: number;
    color?: string;
}


const ChartItem = ({legend, percent, color}: ChartItemProps) => {
    return (
        <div className="chart-item" style={{display: 'flex', border: `1px solid #ccc`}}>
            <div className="col-2 legend px-0" style={{ backgroundColor: `${color || '#000'}`}}>{legend}</div>
            <div className="col-10 legend px-0">
                <div className="text-center" style={{width: `${percent}%`, backgroundColor: `${color || '#000'}`, opacity: 0.7, height: '100%'}}>
                    {percent}%
                </div>
            </div>
        </div>
    )
}

export default ChartItem