// Replace with your actual data fetching logic (e.g., API call)
const appointments = [
    { name: "John Doe", time: "10:00 AM" },
    { name: "Jane Smith", time: "11:30 AM" },
    { name: "Mike Lee", time: "2:00 PM" },
  ];
  
  const scheduleContainer = document.getElementById("schedule-container");
  
  appointments.forEach(appointment => {
    const apptElement = document.createElement("div");
    apptElement.classList.add("appointment");
    apptElement.innerHTML = `<h3>${appointment.time}</h3><p>${appointment.name}</p>`;
    scheduleContainer.appendChild(apptElement);
  });