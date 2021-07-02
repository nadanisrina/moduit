import React from "react";
import TableTask2 from "../component/Table/TableTask2";
import { MDBCard, MDBContainer } from "mdbreact";
const Task2 = () => {
  return (
    <MDBContainer>
      <h4>Question 2</h4>
      <MDBCard className="pt-2 pb-2">
        <TableTask2 />
      </MDBCard>
    </MDBContainer>
  );
};

export default Task2;
