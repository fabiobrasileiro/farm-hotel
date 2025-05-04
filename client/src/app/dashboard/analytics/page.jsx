import React from 'react'
import Layout from '../../(auth)/layout/layout'
import ComplaintsChart from '../../components/ui/ComplaintsChart'
import StatCard from '../../components/StatusCard'
import Aside from '../../components/Aside'
import InfoCard from '../../components/InfoCard'
import { CircularProgress } from '../../components/PieChart'
import Container from '../../components/Container'

function Analytics() {
  return (
    <Layout>
       <div className="flex gap-4">
        <div className=" rounded-lg h-full w-3/4 flex flex-col gap-4">

          <Container title="Occupancy" px="px-4" py="py-4" col="flex-col">
            <div className="w-full flex gap-4">
              {["Building 1", "Building 2", "Building 3"].map((building) => (
                <InfoCard key={building} title={building}>
                  <CircularProgress />
                </InfoCard>
              ))}
            </div>
          </Container>

          <div className="h-auto bg-gray-900 text-white rounded-lg px-8 py-8 flex flex-col gap-4">
            <h1>Fees Colection</h1>

            <div className="w-full flex gap-8">
              
              <div>
                <CircularProgress />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <StatCard label="Expected" value="R$ 54.000,00" />
                <StatCard label="Remaining" value="R$ 54.000,00" colorClass="text-heaven-sand-500" />
                <StatCard label="Collected" value="R$ 54.000,00" colorClass="text-divine-ocean-300" />
                <StatCard label="Overdue" value="R$ 54.000,00" colorClass="text-red-500" />
              </div>
            </div>
          </div>
          
          <Container title="Complaints" px="px-4" py="py-4" col="flex-col">
          <div className="flex gap-4">
          <ComplaintsChart open={500} resolved={450}/>
            <StatCard label="Total Complaints" value="500" colorClass="text-heaven-sand-500" titleSize="text-sm" textSize="text-md" iconSize={20}/>
            <StatCard label="Resolved" value="346" colorClass="text-heaven-sand-500" titleSize="text-sm" textSize="text-md" iconSize={20}/>
            <StatCard label="Open" value="174" colorClass="text-heaven-sand-500" titleSize="text-sm" textSize="text-md" iconSize={20}/>
          </div>

          </Container>

        </div>
        <Aside />
      </div>
    </Layout>
  )
}

export default Analytics
