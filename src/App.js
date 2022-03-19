import React, { useCallback, useEffect, useState } from "react";
import CsvParse from "@vtex/react-csv-parse";
import Chart from "./Chart";

const App = () => {
  const keys = ["header1", "header2", "header3", "header4", "header5"];
  const [data, setData] = useState([]);
  const [Xdata, setXdata] = useState([]);
  const [Ydata, setYdata] = useState([]);

  const handleData = (data) => {
    setData(data);
  };

  const handleXData = () => {
    // setShopList((prev) => [...prev, ...data.shops]);
    setXdata((prev) => [...prev, data.map((x) => x.header1)]);
  };

  const handleYData = () => {
    setYdata((prev) => [...prev, data.map((y) => y.header4)]);
  };

  useEffect(() => {
    console.log(parseInt(data[0].header4));
    console.log(data.map((x) => x.header1));
    handleXData();
    handleYData();
  }, [data]);

  return (
    <div>
      <CsvParse
        keys={keys}
        onDataUploaded={handleData}
        render={(onChange) => <input type="file" onChange={onChange} />}
      />
      <div>
        <Chart
          width={1000}
          height={500}
          data={data}
          Xdata="header1"
          data_1="header4"
        />
      </div>
    </div>
  );
};

export default App;
