import React from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const qna = [
    {
      id: "1",
      qna: "Difference between javascript and nodejs ?",
      ans: "JavaScript is a simple programming language that runs on any browser's JavaScript engine. Where Node JS is an interpreter or running environment for a JavaScript programming language that contains many exaggerations, it requires a library that can be easily accessed from JavaScript programming for better use.",
    },
    {
      id: "2",
      qna: "When should you use nodejs and when should you use mongodb ?",
      ans: "MongoDB presents data as a collection of documents instead of tables related to foreign keys. It makes it possible to decently store a variety of data on the Internet and access web applications using nodes. JS",
    },
    {
      id: "3",
      qna: "Differences between sql and NOsQl databases. ?",
      ans: "SQL databases are vertically scalable, while NoSQL databases are horizontally school-appropriate. SQL Databases are table-linked, while NoSQL Database stores documents, key-values, graphs, or broad-columns. SQL databases are great for multi-row transactions, while NoSQL is good for unstructured information like documents or JSON.",
    },
    {
      id: "4",
      qna: " What is the purpose of jwt and how does it work ?",
      ans: "JWT, or JSON Web Token, is an open value that is used to share security information between two parties - a client and a server. Each JWT contains an encoded JSON object that contains a set of claims. JWT is signed using a cryptographic algorithm so that claims cannot be changed after the token is issued.",
    },
  ];
  return (
    <div className="container">
      <div className="py-28 mb-10">
        <h2 className="text-center py-8">Blogs</h2>
        {qna.map((q) => (
          <Blog key={q.id} q={q}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
