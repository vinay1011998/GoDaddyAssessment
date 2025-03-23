import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Table, Heading, Text } from "@innovaccer/design-system";
import { defaultTableSchema, loaderSchema} from './constants';
import NoDataFoundImg from "../../../assets/NoDataFound.svg";

const pageSize = 10;

const RepositoryTable = () => {
  const history = useHistory();

  const fetchData = async (options) => {
    const { page } = options;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}?page=${page}&per_page=${pageSize}`
      );
      const result = await response.json();

      return Promise.resolve({
        schema: defaultTableSchema,
        count: 30,
        data:result || []
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      return Promise.resolve({
        schema: defaultTableSchema,
        count: 0,
        data: [],
      });
    }
  };

  const getErrorTemplate = (props) => {
    if (
      props.errorType === "NO_RECORDS_FOUND" ||
      props.errorType === "DEFAULT" ||
      props.errorType === "FAILED_TO_FETCH"
    ) {
      return (
        <div style={{ textAlign: "center" }}>
          <img height={500} width={400} src={NoDataFoundImg} />
          <Heading as="h4" className="mt-7 title">
            No Repositories found
          </Heading>
          <Text appearance="subtle">
            No Repositories to display at the moment
          </Text>
        </div>
      );
    }
  };

  return (
    <div className="m-6 h-100">
      <Card className="card-container-contracts " shadow="shadow10">
        <Table
          type="resource"
          loaderSchema={loaderSchema}
          fetchData={fetchData}
          withHeader={true}
          withCheckbox={false}
          onRowClick={(rowData) => {
            history.push(`repos/${rowData.id}`);
          }}
          withPagination={true}
          pageSize={pageSize}
          showMenu={false}
          errorTemplate={getErrorTemplate}
          data-test={"repository-table"}
          className="table-container"
        />
      </Card>
    </div>
  );
};

export default RepositoryTable;
