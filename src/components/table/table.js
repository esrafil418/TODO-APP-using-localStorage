import { El } from "../../utils/el";
import { loadTasks } from "../../modules/storage";

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
            element: "tr",
            className: "text-black",
            children: ["Task", "Priority", "Status", "Deadline", "Actions"].map(
              (head) =>
                El({
                  element: "th",
                  innerText: head,
                  className: "p-2 border  border-gray-300",
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
          className:
            "p-2 border border-r-gray-300 border-l-gray-300 border-t-gray-300 border-b-gray-300",
        }),
        El({
          element: "td",
          innerText: task.status,
          className:
            "p-2 border border-r-gray-300 border-l-gray-300 border-t-gray-300 border-b-gray-300",
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
            El({
              element: "button",

              className: "cursor-pointer",
              onclick: () => row.remove(),
              children: [
                El({
                  element: "i",
                  className:
                    "fa-solid fa-trash bg-[#dc3545] text-white text-sm py-2 px-3 rounded-md",
                }),
              ],
            }),
            El({
              element: "button",

              className: "cursor-pointer",
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
