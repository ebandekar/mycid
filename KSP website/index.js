// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxpLJwQvbSDewZiyaZBOvkULZaK3tRKNc",
    authDomain: "cid1234.firebaseapp.com",
    databaseURL: "https://cid1234-default-rtdb.firebaseio.com",
    projectId: "cid1234",
    storageBucket: "cid1234.appspot.com",
    messagingSenderId: "779301991607",
    appId: "1:779301991607:web:0682386c90b595c6c9c932",
    measurementId: "G-44DFRZC5FJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Set database variable
  var database = firebase.database()
  
  function save() {
      var location = document.getElementById('location').value
      var crime = document.getElementById('crime').value
      
  
    database.ref('crimes/' + location).set({
        location: location,
        crime: crime
    })
  
    alert('Saved')

    resetForm();
  }
  
  function get() {
    var users_ref = database.ref('crimes/');
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
  
    users_ref.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var data = childSnapshot.val();
        var location = childSnapshot.key;
        var crime = data.crime;
  
        var row = document.createElement('tr');
        var locationCell = document.createElement('td');
        var crimeCell = document.createElement('td');
  
        locationCell.textContent = location;
        crimeCell.textContent = crime;
  
        row.appendChild(locationCell);
        row.appendChild(crimeCell);
        tbody.appendChild(row);
      });
  
      table.appendChild(tbody);
      document.body.appendChild(table);
    });

        resetForm();
  }
  
  
  function update() {
    var location = document.getElementById('location').value
    var crime = document.getElementById('crime').value
  
    var updates = {
      location: location,
      crime : crime
    }
  
    database.ref('crimes/' + location).update(updates)
  
    alert('updated')
    resetForm();
  }
  
  function remove() {
    var location = document.getElementById('location').value
  
    database.ref('crimes/' + location).remove()
  
    alert('deleted')
    resetForm();
  }


  function resetForm() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('username').value = '';
    document.getElementById('say_something').value = '';
    document.getElementById('favourite_food').value = '';
  }