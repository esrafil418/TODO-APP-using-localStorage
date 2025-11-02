import { El } from "../../utils/el";

export function AddTaskModal(onSubmit) {
  const modal = El({
    element: "div",
    id: "taskModal",
    className:
      "fixed inset-0 bg-black/50 flex justify-center items-center hidden z-50",
    children: [
      El({
        element: "div",
        className:
          "bg-white p-5 rounded-xl w-[500px] h-[300px] flex flex-col gap-3",
        children: [
          El({
            element: "h2",
            innerText: "Add New Task",
            className: "text-xl font-bold text-center mb-2 text-[#6200ea]",
          }),
          El({
            element: "form",
            id: "taskForm",
            className: "flex flex-col gap-3",
            children: [
              El({
                element: "input",
                id: "taskName",
                placeholder: "Task name",
                className:
                  "border border-gray-300 rounded-md p-2 focus:outline-[#6200ea]",
              }),
              El({
                element: "select",
                id: "priority",
                className:
                  "border border-gray-300 rounded-md p-2 focus:outline-[#6200ea]",
                children: [
                  El({ element: "option", value: "low", innerText: "Low" }),
                  El({
                    element: "option",
                    value: "medium",
                    innerText: "Medium",
                  }),
                  El({ element: "option", value: "high", innerText: "High" }),
                ],
              }),
              El({
                element: "button",
                type: "submit",
                innerText: "Add Task",
                className:
                  "bg-[#6200ea] text-white p-2 rounded-md mt-2 hover:bg-[#4b00b5]",
              }),
            ],
          }),
        ],
      }),
    ],
  });

  modal.show = () => modal.classList.remove("hidden");
  modal.hide = () => modal.classList.add("hidden");

  modal.querySelector("#taskForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const taskName = modal.querySelector("#taskName").value.trim();
    const priority = modal.querySelector("#priority").value;
    if (!taskName) return;

    const newTask = {
      id: Date.now(),
      taskName,
      priority,
      status: "todo",
      deadline: "-",
    };
    onSubmit(newTask);
    modal.hide();
    e.target.reset();
  });

  return modal;
}
