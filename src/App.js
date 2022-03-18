import React, { useCallback, useEffect, useState } from "react";
import CsvParse from "@vtex/react-csv-parse";

const App = () => {
  const keys = ["header1", "header2", "header3", "header4", "header5"];
  const [data, setData] = useState([]);

  const handleData = (data) => {
    setData(data);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <CsvParse
        keys={keys}
        onDataUploaded={handleData}
        render={(onChange) => <input type="file" onChange={onChange} />}
      />
    </div>
  );
};

export default App;
