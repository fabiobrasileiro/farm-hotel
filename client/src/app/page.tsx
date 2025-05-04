
import { ExternalLink } from "lucide-react";
import Layout from "./(auth)/layout/layout";
import Navbar from "./components/Navbar";
import { CircularProgress } from "./components/PieChart";
import Link from "next/link";
import Aside from "./components/Aside";
import Card from "./components/Card";
import Container from "./components/Container";
import StatCard from "./components/StatusCard";
import InfoCard from "./components/InfoCard";
import ComplaintsChart from "./components/ui/ComplaintsChart";


export default function Home() {
  const percentage = 50;

  const dailyOrders = [
    { name: "Occupied", value: percentage },
    { name: "Vacant", value: 100 - percentage },
  ];

  return (
    <Layout>
      <h1>Home</h1>
    </Layout >
  );
}