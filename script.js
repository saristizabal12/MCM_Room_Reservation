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

h1 {
    color: #000;
    /* font-size: large; */
    /* font-weight: bold; */
    text-align: center;
    border: #920049;
    border-radius: 22px;
}

padding: 10px 20px;
    background-color: #920049;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;