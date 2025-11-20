import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";



export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-slate-100 dark:bg-slate-900">
      <Navbar />
      <main className="ml-64 min-h-screen">
        <Dashboard/>
      </main>
    </div>
  );
}
