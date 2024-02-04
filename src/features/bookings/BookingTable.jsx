import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";

function BookingTable() {
  const { bookings, isLoading } = useBookings();
  // console.log(bookings);
  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="booking" />;
  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        {bookings.map((book) => (
          <BookingRow key={book.id} bookings={book} />
        ))}
      </Table>
    </Menus>
  );
}

export default BookingTable;
