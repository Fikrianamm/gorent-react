import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CardContainer } from "./SharedComponent";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const revenueData = [
  { day: "Sen", pendapatan: 500 },
  { day: "Sel", pendapatan: 800 },
  { day: "Rab", pendapatan: 600 },
  { day: "Kam", pendapatan: 700 },
  { day: "Jum", pendapatan: 1000 },
  { day: "Sab", pendapatan: 1100 },
  { day: "Min", pendapatan: 900 },
];

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h5 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  span {
    font-size: 14px;
    color: #6c757d;
  }
`;

const ChartContent = styled.div`
  width: 100%;
  height: 300px;
`;

const RevenueOverview = () => (
  <CardContainer>
      <ChartHeader>
        <div>
          <h5>Tinjauan Pendapatan</h5>
          <span>Pembaruan pendapatan harian</span>
        </div>
      </ChartHeader>

      <ChartContent>
        <ResponsiveContainer>
          <LineChart
            data={revenueData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pendapatan" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </ChartContent>
  </CardContainer>
);

export default RevenueOverview;
