// // Add your JavaScript code here

// // Example using FullCalendar library
// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       // Configure FullCalendar options
//       // For example: initialView, selectable, select, etc.
//     });
//     calendar.render();
    
//     // Event handler for selecting a date and time
//     calendar.on('select', function(info) {
//       var selectedDate = info.startStr; // Get the selected date
//       var selectedTime = info.start.toLocaleTimeString(); // Get the selected time
      
//       // TODO: Send the scheduled meeting details to the server for processing
      
//       // Example code to show the selected date and time
//       alert('Scheduled meeting on ' + selectedDate + ' at ' + selectedTime);
//     });
//   });



// const form = document.getElementById('reservationForm');
// const reservationDetails = document.getElementById('reservationDetails');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById('nameInput').value;
//     const room = document.getElementById('roomInput').value;
//     const date = document.getElementById('dateInput').value;
//     const time = document.getElementById('timeInput').value;

//     const reservation = {
//         name: name,
//         room: room,
//         date: date,
//         time: time
//     };

//     displayReservation(reservation);
//     clearForm();
// });

// function displayReservation(reservation) {
//     const reservationBox = document.createElement('div');
//     reservationBox.classList.add('reservation-box');

//     const reservationInfo = document.createElement('p');
//     reservationInfo.innerHTML = `
//         <strong>Name:</strong> ${reservation.name}<br>
//         <strong>Room:</strong> ${reservation.room}<br>
//         <strong>Date:</strong> ${reservation.date}<br>
//         <strong>Time:</strong> ${reservation.time}
//     `;

//     reservationBox.appendChild(reservationInfo);
//     reservationDetails.appendChild(reservationBox);
// }

// function clearForm() {
//     form.reset();
// }



const form = document.getElementById('reservationForm');
const reservationDetails = document.getElementById('reservationDetails');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('nameInput').value;
    const room = document.getElementById('roomInput').value;
    
    const dateInput = document.getElementById('dateInput');
    const selectedDate = new Date(dateInput.value);
    const options = { 
        month: '2-digit', 
        day: '2-digit', 
        year: 'numeric' 
    };
    const formattedDate = selectedDate.toLocaleDateString('en-US', options);
    const date = formattedDate;

    const time = document.getElementById('timeInput').value;

    const reservation = {
        name: name,
        room: room,
        date: date,
        time: time
    };

    displayReservation(reservation);
    clearForm();
});

function displayReservation(reservation) {
    const reservationBox = document.createElement('div');
    reservationBox.classList.add('reservation-box');

    const reservationInfo = document.createElement('p');
    reservationInfo.innerHTML = `
        <strong>Name:</strong> ${reservation.name}<br>
        <strong>Room:</strong> ${reservation.room}<br>
        <strong>Date:</strong> ${reservation.date}<br>
        <strong>Time:</strong> ${reservation.time}
    `;

    reservationBox.appendChild(reservationInfo);
    reservationDetails.appendChild(reservationBox);
}

function clearForm() {
    form.reset();
}
