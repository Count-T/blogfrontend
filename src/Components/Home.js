import React from "react";
import "../App.scss";
function Home() {
  return (
    <div>
      <h1 className="greeting slowfade-in">Welcome to the Blog.</h1>
      <h3 className=" greeting slowerfade-in">
        Go to "Blog Posts" and click the blog you want to read. Go to "Contacts"
        for any questions or concerns!
      </h3>
    </div>
  );
}

export default Home;
