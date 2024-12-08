import { Table } from "react-bootstrap";
import { CardContainer } from "./SharedComponent";

const currentRentalsData = [
    { item: "Laptop Dell XPS", customer: "Fahris", returnDate: "10 Des 2024" },
    { item: "Canon DSLR Camera", customer: "Sulthon", returnDate: "12 Des 2024" },
    { item: "iPad Pro", customer: "Firman", returnDate: "15 Des 2024" },
  ];
  
  const CurrentRentals = () => (
    <CardContainer>
      <h5>Penyewaan Saat Ini</h5>
      <Table responsive>
        <thead>
          <tr>
            <th>Barang</th>
            <th>Customer</th>
            <th>Tanggal Kembali</th>
          </tr>
        </thead>
        <tbody>
          {currentRentalsData.map((rental, index) => (
            <tr key={index}>
              <td>{rental.item}</td>
              <td>{rental.customer}</td>
              <td>{rental.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
  
  export default CurrentRentals;
  