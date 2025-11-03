import "./style.css";
import { Header } from "./components/header/header";
import { Table } from "./components/table/table";
import { AddTaskModal } from "./components/modal/AddTaskModal";
import { saveTask } from "./modules/storage";

const app = document.getElementById("app");

const header = Header();
const table = Table();
const modal = AddTaskModal((task) => {
  table.addRow(task);
  saveTask(task);
});

header.querySelector("#plusBtn").addEventListener("click", () => {
  modal.show();
});

app.append(header, modal, table);
