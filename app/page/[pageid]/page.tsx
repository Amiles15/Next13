import React from "react";

const page = ({ params }: { params: { pageid: string } }) => {
  return <div>page {params.pageid}</div>;
};

export default page;
