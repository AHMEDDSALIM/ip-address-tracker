import "./App.css";
import Input from "./components/Input";
import GeoMap from "./components/GeoMap";
import { useEffect, useState } from "react";
import Details from "./components/Details";

function App() {
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const info = await getIPinfo();
      setIpInfo(info);
    }
    fetchData();
  }, []);

  async function getIPinfo(input) {
    console.log(input);
    if (input) {
      const data = await fetch(
        `https://test-back-server.vercel.app/getipinfo?ip=${input}`
      );
      const response = await data.json();
      return response;
    } else {
      const data = await fetch("https://test-back-server.vercel.app/getipinfo");
      const response = await data.json();
      return response;
    }
  }

  const handleUpdateIp = async (input) => {
    const info = await getIPinfo(input);
    setIpInfo(info);
  };

  return (
    <>
      <div className="background-image">
        <h1>IP Address Tracker</h1>
        <Input defValue={ipInfo} updateIp={handleUpdateIp} />
      </div>
      <Details info={ipInfo} />
      <GeoMap info={ipInfo} />
    </>
  );
}

export default App;
