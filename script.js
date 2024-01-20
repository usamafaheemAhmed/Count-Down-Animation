function Timer() {
    let secUp1 = document.getElementById("SecUp_1");
    let secUp2 = document.getElementById("SecUp_2");
    let secDown1 = document.getElementById("SecDown_1");
    let secDown2 = document.getElementById("SecDown_2");


    let DayUp_1 = document.getElementById("DayUp_1");
    let DayUp_2 = document.getElementById("DayUp_2");
    let DayDown_1 = document.getElementById("DayDown_1");
    let DayDown_2 = document.getElementById("DayDown_2");

    let HoursUp_1 = document.getElementById("HoursUp_1");
    let HoursUp_2 = document.getElementById("HoursUp_2");
    let HoursDown_1 = document.getElementById("HoursDown_1");
    let HoursDown_2 = document.getElementById("HoursDown_2");

    let MinUp_1 = document.getElementById("MinUp_1");
    let MinUp_2 = document.getElementById("MinUp_2");
    let MinDown_1 = document.getElementById("MinDown_1");
    let MinDown_2 = document.getElementById("MinDown_2");




    let loopLimit = 3 * 24 * 60 * 60; // 3 days in seconds
    // alert(loopLimit)
    let interval = 1000; // 1 second
    // let interval = 0; // 1 second

    let count = 0;

    let countdownInterval = setInterval(function () {
        // Calculate time units
        let seconds = count % 60;
        let minutes = Math.floor((count / 60) % 60);
        let hours = Math.floor((count / 3600) % 24);
        let days = Math.floor(count / (24 * 3600));

        // Update the flip counters
        secUp1.innerText = Math.floor(seconds / 10);
        secUp2.innerText = seconds % 10;
        // secDown1.innerText = Math.floor(seconds / 10);
        // secDown2.innerText = seconds % 10;

        // Apply animation class
        secUp2.classList.add("slide-bottom");
        secDown2.classList.add("slide-bottom");

        // Remove animation class after animation completes
        setTimeout(function () {
            secUp2.classList.remove("slide-bottom");
            secDown2.classList.remove("slide-bottom");

            secDown1.innerText = Math.floor(seconds / 10);
            secDown2.innerText = seconds % 10;
        }, 500); // Adjust the duration of the animation

        // Check for 10 seconds
        if (seconds % 10 === 0) {
            secUp1.classList.add("slide-bottom");
            secDown1.classList.add("slide-bottom");

            // Remove animation class after animation completes
            setTimeout(function () {
                secUp1.classList.remove("slide-bottom");
                secDown1.classList.remove("slide-bottom");
            }, 500); // Adjust the duration of the animation
        }

        // Check for 1 minute
        if (seconds === 0) {
            // Update your flip counters for minutes (MinUp_2, MinDown_2, etc.)
            // with appropriate values and animation classes if needed.
            // alert(minutes % 10);

            MinUp_1.innerText = Math.floor(minutes / 10);
            MinUp_2.innerText = minutes % 10;
            // MinDown_1.innerText = Math.floor(minutes / 10);
            // MinDown_2.innerText = minutes % 10;

            MinUp_2.classList.add("slide-bottom");
            MinDown_2.classList.add("slide-bottom");

            // Remove animation class after animation completes
            setTimeout(function () {
                MinUp_2.classList.remove("slide-bottom");
                MinDown_2.classList.remove("slide-bottom");

                MinDown_1.innerText = Math.floor(minutes / 10);
                MinDown_2.innerText = minutes % 10;
            }, 500); // Adjust the duration of the animation


            // Check for 10 minuts
            if (minutes % 10 === 0) {
                MinUp_1.classList.add("slide-bottom");
                MinDown_1.classList.add("slide-bottom");

                // Remove animation class after animation completes
                setTimeout(function () {
                    MinUp_1.classList.remove("slide-bottom");
                    MinDown_1.classList.remove("slide-bottom");
                }, 500); // Adjust the duration of the animation
            }


        }

        // Check for 1 hour
        if (minutes === 0 && seconds === 0) {
            // Update your flip counters for hours with appropriate values and animation classes if needed.

            // Update the flip counters
            HoursUp_1.innerText = Math.floor(hours / 10);
            HoursUp_2.innerText = hours % 10;
            // HoursDown_1.innerText = Math.floor(hours / 10);
            // HoursDown_2.innerText = hours % 10;

            // Apply animation class
            HoursUp_2.classList.add("slide-bottom");
            HoursDown_2.classList.add("slide-bottom");

            // Remove animation class after animation completes
            setTimeout(function () {
                HoursUp_2.classList.remove("slide-bottom");
                HoursDown_2.classList.remove("slide-bottom");

                HoursDown_1.innerText = Math.floor(hours / 10);
                HoursDown_2.innerText = hours % 10;
            }, 500); // Adjust the duration of the animation

            // Check for 10 seconds
            if (hours % 10 === 0) {
                HoursUp_1.classList.add("slide-bottom");
                HoursDown_1.classList.add("slide-bottom");

                // Remove animation class after animation completes
                setTimeout(function () {
                    HoursUp_1.classList.remove("slide-bottom");
                    HoursDown_1.classList.remove("slide-bottom");
                }, 500); // Adjust the duration of the animation
            }

        }

        // Check for 1 day
        if (hours === 0 && minutes === 0 && seconds === 0) {
            // Update your flip counters for days with appropriate values and animation classes if needed.

            // Update the flip counters
            DayUp_1.innerText = Math.floor(days / 10);
            DayUp_2.innerText = days % 10;
            // DayDown_1.innerText = Math.floor(days / 10);
            // DayDown_2.innerText = days % 10;

            // Apply animation class
            DayUp_2.classList.add("slide-bottom");
            DayDown_2.classList.add("slide-bottom");

            // Remove animation class after animation completes
            setTimeout(function () {
                DayUp_2.classList.remove("slide-bottom");
                DayDown_2.classList.remove("slide-bottom");

            DayDown_1.innerText = Math.floor(days / 10);
            DayDown_2.innerText = days % 10;
            }, 500); // Adjust the duration of the animation

            // Check for 10 seconds
            if (days % 10 === 0) {
                DayUp_1.classList.add("slide-bottom");
                DayDown_1.classList.add("slide-bottom");

                // Remove animation class after animation completes
                setTimeout(function () {
                    DayUp_1.classList.remove("slide-bottom");
                    DayDown_1.classList.remove("slide-bottom");
                }, 500); // Adjust the duration of the animation
            }


        }

        count ++;
        // count += 500;

        // Check if the countdown is complete
        if (count >= loopLimit) {
            clearInterval(countdownInterval);
            // Handle countdown completion as needed
        }
    }, interval);
}

Timer();
