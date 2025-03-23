import React from "react";
import RepositoryCard from "../../components/cards";
import Header from "../../components/header";

const RepoDetails = () => {
  return (
    <React.Fragment>
      <Header title={"About"} />
      <RepositoryCard />
    </React.Fragment>
  );
};

export default RepoDetails;
