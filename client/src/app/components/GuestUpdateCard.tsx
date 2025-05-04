import { DoorOpen } from 'lucide-react';

interface GuestUpdateCardProps {
    name: string;
    initial: string;
    time: string;
}

const GuestUpdateCard = ({ name, initial, time }: GuestUpdateCardProps) => {
    return (
        <div className="w-full p-2 rounded-md bg-slate-800 flex items-center gap-4 px-8">
            <div className="text-xs text-white flex items-center gap-2 ">
                <div className="rounded-full w-12 h-12 bg-gray-950 flex items-center justify-center text-lg font-bold">
                    {initial}
                </div>
                <div>
                    <p className="font-semibold">{name}</p>
                    <div className="flex items-center gap-1 mt-1">
                        <DoorOpen size={16} />
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuestUpdateCard;
