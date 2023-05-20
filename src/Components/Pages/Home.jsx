import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ height: "400px" }}>
      {loading ? (
        <ClipLoader color="#000" loading={loading} />
      ) : (
        <div>
          <h1>Hello, world!</h1>
        </div>
      )}
    </div>
  );
};

export default Home;