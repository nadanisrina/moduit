import React from "react";
import TableTask1 from "../component/Table/TableTask1";
import { MDBCard, MDBContainer } from "mdbreact";
const Task1 = () => {
  return (
    <MDBContainer>
      <h4>Question 1</h4>
      <MDBCard className="pt-2 pb-2">
        <TableTask1 />
      </MDBCard>
    </MDBContainer>
  );
};

export default Task1;
