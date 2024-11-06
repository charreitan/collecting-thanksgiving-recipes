document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevents form submission

    // validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
      isValid = false;
      document.getElementById('nameError').textContent = 'Name is required.';
    }

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '' || !emailRegex.test(email)) {
      isValid = false;
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    }

    const teamName = document.getElementById('teamName').value.trim();
    if (teamName === '') {
      isValid = false;
      document.getElementById('teamNameError').textContent = 'Team name is required.';
    }

    const league = document.getElementById('league').value;
    if (league === '') {
      isValid = false;
      document.getElementById('leagueError').textContent = 'Please select a league.';
    }

    const joinDate = document.getElementById('joinDate').value;
    if (joinDate === '') {
      isValid = false;
      document.getElementById('joinDateError').textContent = 'Please select a date.';
    }