import React from "react";

function Home() {
  return (
    <div className="text-center">
      <h1 className="display-4">Welcome to MyShop!</h1>
      <p className="lead">Your one-stop shop for amazing products.</p>
      <img
        src="/banner.png"
        alt="Shop banner"
        className="img-fluid rounded"
      />
    </div>
  );
}

export default Home;
