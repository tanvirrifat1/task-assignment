const Home = () => {
  const data = localStorage.getItem("booking");
  const parsedData = JSON.parse(data);

  const handleDelete = () => {
    localStorage.removeItem("booking");
    console.log("Data removed from localStorage");
  };

  return (
    <div>
      {parsedData ? (
        <>
          <div className="flex justify-center items-center mt-10">
            <div className="card w-96 text-black shadow-lg">
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Task Name: {parsedData?.taskNameElement}
                </h2>
                <p>Label :{parsedData?.labelNameElement}</p>
                <p>Description :{parsedData?.descriptionElement.slice(0.15)}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline">Edit</button>
                  <div onClick={() => window.location.assign("/")}>
                    <button onClick={handleDelete} className="btn btn-outline">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="flex justify-center items-center text-red-500 mt-36 font-semibold text-4xl">
            No task Added
          </p>
        </>
      )}
    </div>
  );
};

export default Home;
