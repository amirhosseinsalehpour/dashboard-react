import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filtter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        {!showForm ? (
          <Button onClick={() => setShowForm((show) => !show)}>
            Add new cabin
          </Button>
        ) : (
          <Button onClick={() => setShowForm((show) => !show)}>close</Button>
        )}

        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
