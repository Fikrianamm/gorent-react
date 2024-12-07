import React from "react";
import styled from "styled-components";
import { Card, Dropdown } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Data untuk grafik
const data = [
  { name: "Mon", processed: 12, pending: 8 },
  { name: "Tue", processed: 15, pending: 10 },
  { name: "Wed", processed: 18, pending: 12 },
  { name: "Thu", processed: 20, pending: 8 },
  { name: "Fri", processed: 25, pending: 5 },
  { name: "Sat", processed: 28, pending: 7 },
  { name: "Sun", processed: 30, pending: 4 },
];

// Styled-components untuk styling container
const ChartContainer = styled(Card)`
  padding: 20px;
`;

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

const DropdownButton = styled(Dropdown.Toggle)`
  background: #f8f9fa;
  color: #333;
  border: none;
  font-size: 14px;
  &:hover {
    background: #e9ecef;
  }
`;

const DropdownMenu = styled(Dropdown.Menu)`
  border-radius: 8px;
  border: 1px solid #e5e5e5;
`;

const ChartContent = styled.div`
  width: 100%;
  height: 300px;
`;

const CustomLineChart = () => {
  return (
    <ChartContainer>
      <ChartHeader>
        <div>
          <h5>Total Orders</h5>
          <span>Weekly order updates</span>
        </div>
        <Dropdown>
          <DropdownButton id="dropdown-basic">May 2024</DropdownButton>
          <DropdownMenu>
            <Dropdown.Item>April 2024</Dropdown.Item>
            <Dropdown.Item>March 2024</Dropdown.Item>
          </DropdownMenu>
        </Dropdown>
      </ChartHeader>

      <ChartContent>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="processed"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="pending"
              stroke="#00bcd4"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContent>
    </ChartContainer>
  );
};

export default CustomLineChart;