import React from "react";

const ComicsPage = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>;
};

export default ComicsPage;
