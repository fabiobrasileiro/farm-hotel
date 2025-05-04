import React from 'react'

type Complaints = {
    resolved: number,
    open: number

}

const ComplaintsChart = ({ resolved, open }: Complaints) => {
    const total = resolved + open;
    const resolvedPercent = (resolved / total) * 100;
    const openPercent = (total / resolved) * 100;

    return (
        <div className="w-48 h-14 rounded-lg overflow-hidden flex shadow-md">
            <div
                className="bg-cyan-400"
                style={{ width: `${resolvedPercent}%` }}
                title={`Resolved: ${resolved}`}
            />
            <div
                className="bg-yellow-400"
                style={{ width: `${openPercent}%` }}
                title={`Open: ${open}`}
            />
        </div>
    )
}

export default ComplaintsChart
