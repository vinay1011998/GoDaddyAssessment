import React from "react";
import { Placeholder } from "@innovaccer/design-system";

import formatDate from "../../utils/dateFormatter";

export const defaultTableSchema = [
  {
    name: "name",
    displayName: "Repository Name",
    width: "25%",
    separator: false,
    sorting: false,
  },
  {
    name: "private",
    displayName: "Repository Visibility",
    width: "25%",
    separator: false,
    cellType: "STATUS_HINT",
    sorting: false,
    translate: (data) => {
      const isPrivate = data?.data?.private || false;
      return {
        title: isPrivate ? "Private" : "Public",
        statusAppearance: isPrivate ? "alert" : "success",
      };
    },
  },
  {
    name: "created_at",
    displayName: "Created At",
    width: "25%",
    separator: false,
    sorting: false,
    cellRenderer: (data) => {
      if (data.loading) {
        return (
          <div>
            <Placeholder className="placeholder" length="large" />
          </div>
        );
      }
      return formatDate(data?.data?.created_at || "");
    },
  },
  {
    name: "updated_at",
    displayName: "Updated At",
    width: "25%",
    separator: false,
    sorting: false,
    cellRenderer: (data) => {
      if (data.loading) {
        return (
          <div>
            <Placeholder className="placeholder" length="large" />
          </div>
        );
      }
      return formatDate(data?.data?.updated_at || "");
    },
  },
];

export const loaderSchema = [
  {
    name: "name",
    displayName: "Repository Name",
    width: "25%",
    resizable: false,
    tooltip: false,
    separator: false,
    cellType: "DEFAULT",
  },
  {
    name: "private",
    displayName: "Repository Visibility",
    width: "25%",
    resizable: false,
    tooltip: false,
    separator: false,
    cellType: "STATUS_HINT",
  },
  {
    name: "created_at",
    displayName: "Created At",
    width: "25%",
    resizable: false,
    tooltip: false,
    separator: false,
    cellType: "DEFAULT",
  },
  {
    name: "updated_at",
    displayName: "Updated At",
    width: "25%",
    resizable: false,
    tooltip: false,
    separator: false,
    cellType: "DEFAULT",
  },
];
