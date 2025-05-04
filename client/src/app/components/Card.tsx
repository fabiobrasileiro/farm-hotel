import React from 'react'
import { CircularProgress } from './PieChart'
import { ExternalLink } from 'lucide-react'

type Props ={
    title: string,
}
const Card = ({title}: Props) => {
    return (
        <div>
            <div className="bg-slate-800 py-4 px-4 rounded-lg gap-8 flex flex-col text-white">
                <div className="flex items-center gap-2">
                    <p className="font-medium">{title}</p>
                    <span><ExternalLink size={16} /></span>
                </div>
                <div className="px-8">
                    <CircularProgress />
                </div>
            </div>
        </div>
    )
}

export default Card
