import React from "react";
import RepositoryTable from "../../components/table";
import Header from "../../components/header";

const RepoList = () => {
  return (
    <React.Fragment>
      <Header title={"Repositories"} /> <RepositoryTable />
    </React.Fragment>
  );
};

export default RepoList;
