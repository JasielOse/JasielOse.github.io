document.addEventListener("DOMContentLoaded", () => {
    // Get and display current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfWeek;

    // Get and display current UTC time in milliseconds
    const currentUTCTime = currentDate.getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
});