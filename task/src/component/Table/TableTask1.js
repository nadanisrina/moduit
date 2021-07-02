import React, { useState, useEffect, memo } from "react";
import Skeleton from "react-loading-skeleton";
import { MDBContainer, MDBDataTable } from "mdbreact";
import { allDataLoad } from "../../store/action";
import { connect } from "react-redux";
import { compose } from "redux";
import Dummy1 from "../../assets/dummy/Dummy1.json";
import "../../assets/css/dataTables.css";
let TableTask1 = (props) => {
  const { fetchGetQuestionOne, allData, loading } = props;
  let [rows, setRows] = useState([]);
  //filtering data
  if (rows && rows.length > 0) {
    rows.filter((data) => {
      return data;
    });
  }

  useEffect(() => {
    fetchGetQuestionOne("one");
    if (rows.length === 0) {
      setRows(Dummy1);
    }
  }, [rows]);

  let ProductName = ({ title }) => {
    return (
      <div className="row">
        <div className="col-lg-3">
          <div className="img-circle">{title.charAt(0)}</div>
        </div>
        <div className="col-lg-9">
          <p>{title}</p>
        </div>
      </div>
    );
  };
  const data = {
    columns: [
      {
        label: "No",
        field: "No",
        sort: "asc",
        width: 50,
      },
      {
        label: "ProductName",
        field: "ProductName",
        sort: "asc",
        width: 200,
      },
      {
        label: "Category",
        field: "Category",
        sort: "asc",
        width: 200,
      },
      {
        label: "Description",
        field: "Description",
        sort: "asc",
        width: 200,
      },
      {
        label: "Tags",
        field: "Tags",
        sort: "asc",
        width: 200,
      },
    ],

    rows: rows.map((data, index) => ({
      No: index + 1,
      ProductName: <ProductName title={data.title ?? "-"} />,
      Category: data.category ?? "-",
      Description: data.description ?? "-",
      Tags: data.tags ? data.tags.length !== 0 ? <ul>{data.tags.map((tag) => <li>{tag}</li>)}</ul> : "-": "-",
    })),
  };

  let renderTable = () => {
    if (!loading) {
      return (
        <div style={{ whiteSpace: "pre-line" }}>
          <MDBDataTable
            id="TableAll"
            noBottomColumns={true}
            className="text-center"
            responsive
            disableRetreatAfterSorting
            borderless
            data={data}
            displayEntries={true}
            entriesOptions={[5, 10, 15]}
            pagesAmount={5}
            entries={10}
            searching={false}
            sortable={true}
          />
        </div>
      );
    } else if (loading) {
      return (
        <div>
          <h1>
            <Skeleton />
          </h1>
          <Skeleton count={10} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Data Kosong</h1>
        </div>
      );
    }
  };
  return <MDBContainer>{renderTable()}</MDBContainer>;
};

function mapDispatchToProps(dispatch) {
  return {
    fetchGetQuestionOne: (params) => {
      dispatch(allDataLoad(params));
    },
  };
}

const mapStateToProps = (state) => {
  const { allData, loading } = state.DataReducer;
  return { allData, loading };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(TableTask1);
