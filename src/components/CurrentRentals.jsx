import { Table } from "react-bootstrap";
import { CardContainer } from "./SharedComponent";

const currentRentalsData = [
    { item: "Laptop Dell XPS", customer: "John Doe", returnDate: "10 Dec 2024" },
    { item: "Canon DSLR Camera", customer: "Jane Smith", returnDate: "12 Dec 2024" },
    { item: "iPad Pro", customer: "Tom Hardy", returnDate: "15 Dec 2024" },
  ];
  
  const CurrentRentals = () => (
    <CardContainer>
      <h5>Current Rentals</h5>
      <Table responsive>
        <thead>
          <tr>
            <th>Item</th>
            <th>Customer</th>
            <th>Return Date</th>
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
  