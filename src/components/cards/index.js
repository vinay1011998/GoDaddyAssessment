import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

import useFetchData from "../../hooks/useFetchData";
import {
  Row,
  Column,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Badge,
  CardFooter,
  LinkButton,
  Spinner,
} from "@innovaccer/design-system";

const RepositoryCard = () => {
  const { id } = useParams(); // get the repo name from the url

  const apiUrl = useMemo(
    () => `${process.env.REACT_APP_DETAIL_API_URL}/${id}`,
    [id]
  );

  const { data, loading, error } = useFetchData({ url: apiUrl });

  if (loading) {
    // show a spinner while the data is being fetched
    return (
      <div
        className="d-flex justify-content-center align-items-center p-6"
        style={{ height: "100vh", width: "100vw" }}
      >
        <Spinner appearance="primary" size="large" />
      </div>
    );
  }

  if (error) {
    // show an error message if the data fetching fails
    return (
      <Card className="m-6">
        <CardBody>
          <Text appearance="alert">
            Error loading repository: {error.message || "Unknown error"}
          </Text>
        </CardBody>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card className="m-6">
        <CardBody>
          <Text appearance="subtle">No repository data found</Text>
        </CardBody>
      </Card>
    );
  }

  const {
    name = "",
    private: isPrivate,
    description = "No Description for this repo",
    language = "Not specified",
    html_url,
    forks = 0,
    watchers_count = 0,
    open_issues_count = 0,
  } = data;

  return (
    <Row className="p-6">
      <Column size="8">
        <Card>
          <CardHeader>
            <Heading size="s">{name}</Heading>
          </CardHeader>
          <CardBody className="mb-3 pb-6">
            <Card shadow="none">
              <CardHeader className="d-flex justify-content-between">
                <Text weight="strong">About - {name}</Text>
                <Badge appearance={isPrivate ? "alert" : "accent4"}>
                  {isPrivate ? "PRIVATE" : "PUBLIC"}
                </Badge>
              </CardHeader>
              <CardBody>
                <div className="mb-5">
                  <Text weight="strong" className="d-block mb-2">
                    DESCRIPTION
                  </Text>
                  <Text appearance="disabled" className="d-block">
                    {description}
                  </Text>
                </div>

                <div className="mb-5">
                  <Text weight="strong" className="d-block mb-2">
                    LANGUAGES
                  </Text>
                  <Text appearance="disabled" className="d-block">
                    {language}
                  </Text>
                </div>

                <div className="mt-4">
                  <LinkButton
                    aria-label="link"
                    icon="open_in_new"
                    iconAlign="right"
                    onClick={() => window.open(html_url, "_blank")}
                  >
                    Link to Repository
                  </LinkButton>
                </div>
              </CardBody>

              <CardFooter className="position-relative" withSeperator={false}>
                <div className="d-flex flex-wrap">
                  <div className="mr-6">
                    <Text appearance="disabled" small>
                      Forks:
                    </Text>
                    <Text small className="ml-2">
                      {forks}
                    </Text>
                  </div>
                  <div className="mr-6">
                    <Text appearance="disabled" small>
                      Watchers:
                    </Text>
                    <Text small className="ml-2">
                      {watchers_count}
                    </Text>
                  </div>
                  <div>
                    <Text appearance="disabled" small>
                      Open Issues:
                    </Text>
                    <Text small className="ml-2">
                      {open_issues_count}
                    </Text>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
};

export default RepositoryCard;
