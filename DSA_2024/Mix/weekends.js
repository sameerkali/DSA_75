function getWeekends(month, year) {
    let weekends = [];
    
    // Adjust month for Date object (JavaScript months are 0-based, so 0 = January, 11 = December)
    month = month - 1;
  
    // Get the number of days in the month
    let daysInMonth = new Date(year, month + 1, 0).getDate();
  
    // Loop through all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      let currentDate = new Date(year, month, day);
      let dayOfWeek = currentDate.getDay();
  
      // Check if the day is Saturday (6) or Sunday (0)
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekends.push(currentDate.toDateString()); // Format as a readable string
      }
    }
  
    return weekends;
  }
  
  // Example usage:
  let month = 8;  // August
  let year = 2024;
  
  console.log(getWeekends(month, year));
  // Output: Array of weekends in August 2024
  