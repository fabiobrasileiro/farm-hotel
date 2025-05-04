import { ExternalLink } from 'lucide-react'
import React, { ReactNode } from 'react'
import { CircularProgress } from './PieChart'
import { cn } from '@/lib/utils'

type Props = {
    title: string,
    children?: ReactNode,
    color?: string,
    px: string,
    py: string,
    height?: string,
    width?: string,
    col?: string
}
const Container = ({ title, children, color, px = "", py = "", height, width, col=""}: Props) => {
    return (
        <div className={cn("h-auto bg-gray-900 text-white rounded-lg  flex  gap-4", color, px, py, height, width, col)}>

            <h1>{title}</h1>
            <div className="w-full">{children}</div>
        </div>
    )
}

export default Container
