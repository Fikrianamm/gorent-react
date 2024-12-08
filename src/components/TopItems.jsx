import React from "react";
import { Table } from "react-bootstrap";
import { CardContainer } from "./SharedComponent";

const TopItems = () => {
  const topItemsData = [
    { name: "Laptop Dell XPS", rentals: 120 },
    { name: "Canon DSLR Camera", rentals: 85 },
    { name: "Projector Epson", rentals: 75 },
    { name: "iPad Pro", rentals: 70 },
    { name: "Smart TV Samsung", rentals: 65 },
  ];

  return (
    <CardContainer className="h-100">
      <h5>Barang Paling Banyak Disewa</h5>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Barang</th>
            <th>Penyewaan</th>
          </tr>
        </thead>
        <tbody>
          {topItemsData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.rentals}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default TopItems;
