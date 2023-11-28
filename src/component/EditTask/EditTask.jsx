import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = localStorage.getItem("booking");
  const parsedData = JSON.parse(data);

  const taskIndex = parseInt(id, 10);

  if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= parsedData.length) {
    console.error(`Task with index ${id} not found`);
    navigate("/");
    return null;
  }

  const defaultValues = {
    taskNameElement: parsedData[taskIndex].taskNameElement || "",
    labelNameElement: parsedData[taskIndex].labelNameElement || "",
    descriptionElement: parsedData[taskIndex].descriptionElement || "",
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const form = e.target;
    const taskNameElement = form.elements.web.value;
    const labelNameElement = form.elements.label.value;
    const descriptionElement = form.elements.description.value;

    const updatedTask = {
      ...parsedData[taskIndex],
      taskNameElement,
      labelNameElement,
      descriptionElement,
    };

    parsedData[taskIndex] = updatedTask;

    localStorage.setItem("booking", JSON.stringify(parsedData));

    Swal.fire("Edit successfully!");

    navigate("/");
  };

  return (
    <div>
      <div className="hero ">
        <div className="hero-content w-[700px] flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleEdit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Option</span>
                </label>
                <select
                  defaultValue={defaultValues.taskNameElement}
                  required
                  name="web"
                  className="select select-bordered "
                >
                  <option value="" disabled selected>
                    Task Name
                  </option>
                  <option name="web-development" value="web-development">
                    Web Development
                  </option>
                  <option name="Digital-marketing" value="Digital-marketing">
                    Digital marketing
                  </option>
                  <option name="Graphics-designer" value="Graphics-designer">
                    Graphics designer
                  </option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Option</span>
                </label>
                <select
                  required
                  defaultValue={defaultValues.labelNameElement}
                  name="label"
                  className="select select-bordered"
                >
                  <option value="" disabled selected>
                    Task Level
                  </option>
                  <option name="web-development" value="High">
                    High
                  </option>
                  <option name="Digital-marketing" value="Medium">
                    Medium
                  </option>
                  <option name="Graphics-designer" value="Basic">
                    Basic
                  </option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task description</span>
                </label>
                <textarea
                  defaultValue={defaultValues.descriptionElement}
                  name="description"
                  className="textarea textarea-bordered"
                  placeholder="description"
                  required
                ></textarea>
              </div>
              <div type="submit" className="form-control mt-6">
                <button className="btn btn-outline">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
