import React from "react";
import { PageHeader } from "@innovaccer/design-system";

const Header = ({ title }) => {
  return (
    <div className="bg-secondary-lightest">
      <PageHeader title={title} separator={false} />
    </div>
  );
};

export default Header;
