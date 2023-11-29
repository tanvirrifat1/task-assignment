import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdPending } from "react-icons/md";

const Home = () => {
  const data = localStorage.getItem("booking");
  const parsedData = JSON.parse(data);

  const handlePending = (index) => {
    const indexId = parseInt(index, 10);
    if (isNaN(indexId) || indexId < 0 || indexId >= parsedData.length) {
      console.error(`Invalid index: ${index}`);
      return;
    }
    const updatedTask = { ...parsedData[indexId] };
    updatedTask.pendingData = true;
    parsedData[indexId] = updatedTask;
    localStorage.setItem("booking", JSON.stringify(parsedData));
  };

  const handleDelete = (index) => {
    if (parsedData && index >= 0 && index < parsedData.length) {
      const updatedData = [
        ...parsedData.slice(0, index),
        ...parsedData.slice(index + 1),
      ];

      localStorage.setItem("booking", JSON.stringify(updatedData));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-5 mt-3">
      {parsedData.length ? (
        <>
          {parsedData?.map((data, i) => {
            const {
              taskNameElement,
              labelNameElement,
              descriptionElement,
              pendingData,
            } = data;
            return (
              <div key={i} className="flex justify-center items-center my-10">
                <div className="card lg:w-[700px] text-black shadow-lg">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Task Name: {taskNameElement}</h2>
                    <p>Label :{labelNameElement}</p>
                    <p>Description :{descriptionElement}</p>
                    <div className="card-actions justify-end">
                      <div
                        onClick={() => window.location.assign("/")}
                        className="flex items-center"
                      >
                        {pendingData ? (
                          <>
                            {" "}
                            <button className="btn btn-sm border-black">
                              <AiFillCheckCircle />
                              completed
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handlePending(i)}
                              className="btn btn-sm border-black"
                            >
                              <MdPending />
                              Mark-as-completed
                            </button>
                          </>
                        )}
                      </div>
                      <Link to={`/edit/${i}`}>
                        <button className="btn btn-sm border-black">
                          Edit
                        </button>
                      </Link>

                      <div onClick={() => window.location.assign("/")}>
                        <button
                          onClick={() => handleDelete(i)}
                          className="btn btn-sm border-black"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
