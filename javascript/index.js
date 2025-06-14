const input1 = document.getElementById("firstName");
const input2 = document.getElementById("lastName");
const input3 = document.getElementById("email");

// document.getElementById("update_form").addEventListener("submit", function (e) {
//   if (!input1.value && !input2.value && !input3.value) {
//     // You should check other inputs if you have.
//     e.preventDefault();
//     return false;
//   }
//   // Do nothing, the form will be submitted.
// });

function myalert() {
  if (!input1.value || !input1.value || !input3.value) {
    alert("Fill out all fields");
  } else alert("Hey, thank you for signing up for push notifications");
}
