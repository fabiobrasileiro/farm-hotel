
import { ExternalLink } from "lucide-react";
import Layout from "./(auth)/layout/layout";
import Navbar from "./components/Navbar";
import { CircularProgress } from "./components/PieChart";
import Link from "next/link";
import Aside from "./components/Aside";


export default function Home() {
  const percentage = 50;

  const dailyOrders = [
    { name: "Occupied", value: percentage },
    { name: "Vacant", value: 100 - percentage },
  ];

  return (
    <Layout>
      <div className="flex gap-4">
        <div className=" rounded-lg h-full w-3/4">
          <div className="h-auto bg-gray-900 text-white rounded-lg px-8 py-8 flex flex-col gap-4">
            <h1>Occupancy</h1>
            <div className="w-full flex gap-4">
              <div className="bg-slate-800 py-4 px-4 rounded-lg gap-8 flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="font-medium">Building 1</p>
                  <span><ExternalLink size={16} /></span>
                </div>
                <div className="px-8">
                  <CircularProgress />
                </div>
              </div>

              <div className="bg-slate-800 py-4 px-4 rounded-lg gap-8 flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="font-medium">Building 2</p>
                  <span><ExternalLink size={16} /></span>
                </div>
                <div className="px-8">
                  <CircularProgress />
                </div>
              </div>

              <div className="bg-slate-800 py-4 px-4 rounded-lg gap-8 flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="font-medium">Building 3</p>
                  <span><ExternalLink size={16} /></span>
                </div>
                <div className="px-8">
                  <CircularProgress />
                </div>
              </div>

            </div>

          </div>

          .<div className="h-auto bg-gray-900 text-white rounded-lg px-8 py-8 flex flex-col gap-4">
            <h1>Fees Colection</h1>

            <div className="w-full flex">
              <div>
                <CircularProgress />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="h-20 w-64 bg-slate-800 rounded-md px-4 py-3 flex items-center justify-between">
                  <div>
                    <h3>Expected</h3>
                    <p className="text-2xl font-medium">R$ 54.000,00</p>
                  </div>
                  <div>
                    <Link href="/">
                      <ExternalLink size={28} strokeWidth={2} />
                    </Link>
                  </div>
                </div>

                <div className="h-20 w-64 bg-slate-800 rounded-md px-4 py-3 flex items-center justify-between">
                  <div>
                    <h3>Remaining</h3>
                    <p className="text-2xl font-medium text-heaven-sand-500">R$ 54.000,00</p>
                  </div>
                  <div>
                    <Link href="/">
                      <ExternalLink size={28} strokeWidth={2} className="text-heaven-sand-500" />
                    </Link>

                  </div>
                </div>

                <div className="h-20 w-64 bg-slate-800 rounded-md px-4 py-3 flex items-center justify-between">
                  <div>
                    <h3>Collected</h3>
                    <p className="text-2xl font-medium text-divine-ocean-300">R$ 54.000,00</p>
                  </div>
                  <div>
                    <Link href="/">
                      <ExternalLink size={28} strokeWidth={2} className="text-divine-ocean-300" />
                    </Link>
                  </div>
                </div>
                <div className="h-20 w-64 bg-slate-800 rounded-md px-4 py-3 flex items-center justify-between">
                  <div>
                    <h3>Overdue</h3>
                    <p className="text-2xl font-medium text-red-500">R$ 54.000,00</p>
                  </div>
                  <div>
                    <Link href="/">
                      <ExternalLink size={28} strokeWidth={2} className="text-red-500" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Aside />
      </div>
    </Layout>
  );
}