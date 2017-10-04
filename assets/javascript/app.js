  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDp2Em9g1Om4y3-ccZLJ3vutli07GU_HRw",
    authDomain: "cookies-a8b6e.firebaseapp.com",
    databaseURL: "https://cookies-a8b6e.firebaseio.com",
    projectId: "cookies-a8b6e",
    storageBucket: "cookies-a8b6e.appspot.com",
    messagingSenderId: "52793967330"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


$(".btn").on("click", function(hi) {
  hi.preventDefault()
  console.log("hi")
  var name = $("#name-input").val().trim();
  var role = $("#role-input").val().trim();
  var start = $("#start-input").val().trim();
  var rate = $("#rate-input").val().trim();

  database.ref().push({
    employeeName: name,
    employeeRole: role,
    employeeStartDate: start,
    employeeRate: rate
  })

})

database.ref().on("child_added", function() {
  $("#newemployee")
})