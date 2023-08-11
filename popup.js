document.addEventListener('DOMContentLoaded', function() {
    // Retrieve checkbox elements
    var waterReminderCheckbox = document.getElementById('waterReminderCheckbox');
    var postureReminderCheckbox = document.getElementById('postureReminderCheckbox');
    var walkReminderCheckbox = document.getElementById('walkReminderCheckbox');
    var eyeExerciseReminderCheckbox = document.getElementById('eyeExerciseReminderCheckbox');
    var TakeaScreenBreakCheckbox = document.getElementById('TakeaScreenBreakCheckbox');
  
    // Function to update reminder status based on checkbox state
    function updateReminderStatus() {
      var waterReminderEnabled = waterReminderCheckbox.checked;
      var postureReminderEnabled = postureReminderCheckbox.checked;
      var walkReminderEnabled = walkReminderCheckbox.checked;
      var eyeExerciseReminderEnabled = eyeExerciseReminderCheckbox.checked;
      var TakeaScreenBreakEnabled = TakeaScreenBreakCheckbox.checked;

  
  
      // TODO: Handle enabling/disabling reminders based on checkbox state
    }
  
    // Add event listeners to update reminder status on checkbox change
    waterReminderCheckbox.addEventListener('change', updateReminderStatus);
    postureReminderCheckbox.addEventListener('change', updateReminderStatus);
    walkReminderCheckbox.addEventListener('change', updateReminderStatus);
    eyeExerciseReminderCheckbox.addEventListener('change', updateReminderStatus);
    TakeaScreenBreakCheckbox.addEventListener('change', updateReminderStatus);

  });
  