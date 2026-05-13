function initTimer() {
    let userSelectedDate = null;
    let timerId = null;

    const startButton = document.querySelector("[data-start]");
    const dateInput = document.querySelector("#datetime-picker");

    const daysValue = document.querySelector("[data-days]");
    const hoursValue = document.querySelector("[data-hours]");
    const minutesValue = document.querySelector("[data-minutes]");
    const secondsValue = document.querySelector("[data-seconds]");

    startButton.disabled = true;

    const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        const selectedDate = selectedDates[0];

            if (selectedDate <= new Date()) {
                iziToast.error({
                    title: "Error",
                    message: "Please choose a date in the future",
                });

                startButton.disabled = true;
                return;
            }

            userSelectedDate = selectedDate;
            startButton.disabled = false;
        }
    };

    const calendar = flatpickr(dateInput, options);

    startButton.addEventListener("click", function() {
        startButton.disabled = true;
        dateInput.disabled = true;

        timerId = setInterval(function() {
            updateTimer();
        }, 1000);

        updateTimer();
    });

    function updateTimer() {
        const currentTime = new Date();
        const timeLeft = userSelectedDate - currentTime;

            if (timeLeft <= 0) {
                clearInterval(timerId);

                daysValue.textContent = "00";
                hoursValue.textContent = "00";
                minutesValue.textContent = "00";
                secondsValue.textContent = "00";

                dateInput.disabled = false;
                calendar.clear();

                userSelectedDate = null;
                startButton.disabled = true

                return;
            }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    daysValue.textContent = addLeadingZero(days);
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);
}

    function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);

        const hours = Math.floor((ms % day) / hour);

        const minutes = Math.floor(((ms % day) % hour) / minute);

        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    }

    function addLeadingZero(value) {
        return String(value).padStart(2, "0");
    }
}

initTimer();