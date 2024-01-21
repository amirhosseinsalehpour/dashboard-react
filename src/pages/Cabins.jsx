import { useEffect } from "react";
import { getCabiens } from "../services/apiCabins";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

function Cabins() {
  useEffect(function () {
    getCabiens().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      {/* <Heading as="h1">All cabins</Heading>
      <p>TEST</p> */}
      <img src="https://fobpsrfobckzvloujtsa.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" />
    </Row>
  );
}

export default Cabins;
