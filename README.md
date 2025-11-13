# TODO-APP

A modern, feature-rich task management application built with vanilla JavaScript, Vite, and Tailwind CSS.

## Features

- ✅ **Add Tasks**: Create new tasks with name, description, priority, status, and deadline
- ✏️ **Edit Tasks**: Update existing tasks directly from the table
- 🗑️ **Delete Tasks**: Remove completed or unwanted tasks
- 👁️ **View Tasks**: Quick view of task details
- 🎨 **Color-Coded Priority & Status**: Visual indicators for task priority (Low/Medium/High) and status (Todo/Doing/Done)
- 📅 **Date Picker**: Jalali calendar date picker for setting deadlines
- 💾 **Local Storage**: Tasks persist across browser sessions

## Tech Stack

- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: No framework dependencies (ES6 modules)
- **LocalStorage**: Client-side data persistence
- **Jalali Date Picker**: Persian calendar date selection

## Usage

### Adding a Task

1. Click the **"+" button** in the header
2. Fill in the task details:
   - Task name (required)
   - Details/Description
   - Priority (Low/Medium/High)
   - Status (Todo/Doing/Done)
   - Deadline (using the date picker)
3. Click **"Add Task"** to save

### Editing a Task

1. Click the **blue pen icon** next to a task
2. The modal opens with the task details pre-filled
3. Modify the fields as needed
4. Click **"Update Task"** to save changes

### Viewing a Task

1. Click the **gray eye icon** to view task details

### Deleting a Task

1. Click the **red trash icon** to delete the task

## Data Storage

All tasks are stored in the browser's LocalStorage under the key `"tasks"`. Each task object contains:

```javascript
{
  id: number,              // Unique timestamp-based ID
  taskName: string,        // Task title
  priority: string,        // "low", "medium", or "high"
  status: string,          // "todo", "doing", or "done"
  deadline: string,        // Date in Jalali format
  details: string          // Task description
}
```

## Features Explained

### Color Coding

- **Priority Colors**:

  - Low: Green
  - Medium: Yellow
  - High: Red

- **Status Colors**:
  - Todo: Gray
  - Doing: Blue
  - Done: Green

## Author

**Esrafil** - [GitHub](https://github.com/esrafil418)

---

Built with ❤️ using Vite and Tailwind CSS
