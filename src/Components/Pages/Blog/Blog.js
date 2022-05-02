import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = ({ q }) => {
  const { qna, ans } = q;
  return (
    <div className="">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h2 className="font-bold text-xl">{qna}</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p className="text-base">{ans}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
