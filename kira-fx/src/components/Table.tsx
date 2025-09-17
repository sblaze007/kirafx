import { useEffect, useState } from "react";

export default function StocksTable() {
  const [data, setData] = useState([]);
  const sheetId = "1ZI0_TsYO5kfJRx_orZGwMunroRyODUv9kUBsVHLjWk4";
  const sheetName = "Stocks";
  useEffect(() => {
    fetch(
      `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`
    )
      .then((res) => res.text())
      .then((csv) => {
        const rows = csv.split("\n").map((r) => r.split(","));
        console.log(rows);
      });
  }, []);

  return (
    <div>
      <h2>Stocks</h2>
      <table>
        <tbody>
          {data.map((row: any[], i) => (
            <tr key={i}>
              {row?.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
