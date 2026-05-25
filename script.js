// Get form
const taskForm =
  document.getElementById("taskForm");

// Submit form event
taskForm.addEventListener(
  "submit",
  function (event) {

    // Prevent page reload
    event.preventDefault();

    // Get form values
    const taskName =
      document.getElementById("taskName")
      .value
      .trim();

    const description =
      document.getElementById("description")
      .value
      .trim();

    const assignedTo =
      document.getElementById("assignedTo")
      .value
      .trim();

    const dueDate =
      document.getElementById("dueDate")
      .value;

    const status =
      document.getElementById("status")
      .value;

    // Error elements
    const nameError =
      document.getElementById("nameError");

    const descriptionError =
      document.getElementById(
        "descriptionError"
      );

    const assignedError =
      document.getElementById(
        "assignedError"
      );

    const dateError =
      document.getElementById("dateError");

    const statusError =
      document.getElementById(
        "statusError"
      );

    // Clear previous errors
    nameError.textContent = "";

    descriptionError.textContent = "";

    assignedError.textContent = "";

    dateError.textContent = "";

    statusError.textContent = "";

    let isValid = true;

    // Validate task name
    if (taskName === "") {

      nameError.textContent =
        "Task name is required";

      isValid = false;

    }

    // Validate description
    if (description === "") {

      descriptionError.textContent =
        "Description is required";

      isValid = false;

    }

    // Validate assigned person
    if (assignedTo === "") {

      assignedError.textContent =
        "Assigned person is required";

      isValid = false;

    }

    // Validate due date
    if (dueDate === "") {

      dateError.textContent =
        "Due date is required";

      isValid = false;

    }

    // Validate status
    if (status === "") {

      statusError.textContent =
        "Please select a status";

      isValid = false;

    }

    // If valid
    if (isValid) {

      alert(
        "Task Added Successfully!"
      );

      taskForm.reset();

    }

  }
);

// Function to change task status
function changeStatus(button) {

  // Get badge
  const badge =
    button.previousElementSibling;

  // Current status
  const currentStatus =
    badge.textContent.trim();

  // Change status
  if (currentStatus === "TODO") {

    badge.textContent =
      "IN PROGRESS";

    badge.className =
      "badge bg-warning text-dark";

  }

  else if (
    currentStatus ===
    "IN PROGRESS"
  ) {

    badge.textContent =
      "REVIEW";

    badge.className =
      "badge bg-info";

  }

  else if (
    currentStatus === "REVIEW"
  ) {

    badge.textContent =
      "DONE";

    badge.className =
      "badge bg-success";

  }

  else {

    badge.textContent =
      "TODO";

    badge.className =
      "badge bg-primary";

  }

}

// Function to change task priority
function changePriority(selectElement) {

  // Get card
  const card =
    selectElement.closest(".card");

  // Selected priority
  const priority =
    selectElement.value;

  // URGENT = Red background
  if (priority === "URGENT") {

    card.style.backgroundColor =
      "#ffb3b3";

  }

  // LOW or MEDIUM = Default
  else {

    card.style.backgroundColor =
      "";

  }

}