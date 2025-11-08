import { El } from "../../utils/el";
import { loadTasks, saveTask, removeTask } from "../../modules/storage";
import { getStatusColor, getPriorityColor } from "../../utils/colorUtils";

export function Table() {
  const table = El({
    element: "table",
    id: "taskTable",
    className: "w-full border-collapse",
    children: [
      El({
        element: "thead",
        children: [
          El({
            // creat a row
            element: "tr",
            className: "text-black text-sm",
            children: ["Task", "Priority", "Status", "Deadline", "Actions"].map(
              (head) =>
                El({
                  element: "th",
                  innerText: head,
                  className: "p-2 border  border-gray-300 text-sm",
                })
            ),
          }),
        ],
      }),
      El({
        element: "tbody",
        id: "taskTableBody",
      }),
    ],
  });

  table.addRow = (task) => {
    const row = El({
      element: "tr",
      className: "text-center border border-gray-300",
      children: [
        El({
          element: "td",
          innerText: task.taskName,
          className:
            "p-2 border border-r-gray-300 border-l-gray-300 border-t-gray-300 border-b-gray-300",
        }),
        El({
          element: "td",
          innerText: task.priority,
          className: `p-2 border border-r-gray-300 border-l-gray-300 border-t-gray-300 border-b-gray-300 ${getPriorityColor(
            task.priority
          )}`,
        }),
        El({
          element: "td",
          innerText: task.status,
          className: `p-2 border border-r-gray-300 border-l-gray-300 border-t-gray-300 border-b-gray-300 ${getStatusColor(
            task.status
          )}`,
        }),
        El({
          element: "td",
          innerText: task.deadline,
          className:
            "p-2 border border-r-gray-300 border-l-gray-300 border-t-gray-300 border-b-gray-300",
        }),
        El({
          element: "td",
          className: "p-2 flex gap-1 justify-center items-center ",
          children: [
            // remove button
            El({
              element: "button",
              className: "cursor-pointer",
              children: [
                El({
                  element: "i",
                  className:
                    "fa-solid fa-trash bg-[#dc3545] text-white text-sm py-2 px-3 rounded-md",
                  onclick: () => {
                    removeTask(task.id);
                    row.remove();
                  },
                }),
              ],
            }),
            // edit task
            El({
              element: "button",
              className: "cursor-pointer",
              onclick: () => {
                const modal = document.getElementById("taskModal");
                modal.classList.remove("hidden");
                document.getElementById("addTask").innerText = "Update Task";
                document.getElementById("taskName").value = task.taskName;
                document.getElementById("priority").value = task.priority;
                document.getElementById("status").value = task.status;
                document.getElementById("deadline").value = task.deadline;
                document.getElementById("details").value = task.details || "";

                modal.dataset.editId = task.id;
              },
              children: [
                El({
                  element: "i",
                  className:
                    "fa-solid fa-pen bg-[#0d6efd] text-white text-sm py-2 px-3 rounded-md",
                }),
              ],
            }),
            El({
              element: "button",
              className: "cursor-pointer",
              onclick: () => {
                const modal = document.getElementById("taskModal");
                modal.classList.remove("hidden");

                document.getElementById("taskName").value = task.taskName;
                document.getElementById("priority").value = task.priority;
                document.getElementById("status").value = task.status;
                document.getElementById("deadline").value = task.deadline;
                document.getElementById("details").value = task.details || "";
              },
              children: [
                El({
                  element: "i",
                  className:
                    "fa-solid fa-eye bg-[#6c757d] text-white text-sm py-2 px-3 rounded-md",
                }),
              ],
            }),
          ],
        }),
      ],
    });

    table.querySelector("#taskTableBody").appendChild(row);
  };

  const savedTasks = loadTasks();
  savedTasks.forEach((task) => table.addRow(task));

  return table;
}
