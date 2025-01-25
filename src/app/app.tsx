import Chart from "components/Chart";
import Navbar from "components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [device, setDevice] = useState("desktop");
  const [clsData, setClsData] = useState({
    timeseries: [],
    values: [],
  });
  const [lcpData, setLcpData] = useState({
    timeseries: [],
    values: [],
  });
  useEffect(() => {
    (async () => {
      const promises = ["cls", "lcp"].map((metric) => {
        return fetch(
          `https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            return data;
          });
      });
      const [cls, lcp] = await Promise.all(promises);
      console.log("da", cls, lcp);
      setClsData(cls);
      setLcpData(lcp);
    })();
  }, [device]);
  return (
    <main className="bg-primary_Background h-screen overflow-y-scroll">
      <Navbar />
      <h1 className="text-primary_Text text-4xl font-bold text-center mt-8">
        SpeedVitaIs Internship Assessment
      </h1>
      <div className="flex items-center justify-center gap-5 mt-8">
        <span className=" text-primary_Text text-lg font-semibold">
          Choose a device
        </span>
        <select
          className="rounded-md bg-gray-500/25 text-primary_Text mt-2 focus:outline-none focus:ring-2 focus:ring-primary_Background focus:ring-opacity-50"
          onChange={(e) => setDevice(e.target.value)}
        >
          <option value="desktop">Desktop</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 p-5">
        <Chart
          timeseries={clsData?.timeseries}
          values={clsData?.values}
          title="Comulative Layout Shift"
        />
        <Chart
          timeseries={lcpData?.timeseries}
          values={lcpData?.values}
          title="Largest Contentful Paint"
        />
      </div>
    </main>
  );
}

export default App;
