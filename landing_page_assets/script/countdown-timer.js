const LANDING_PAGE_TIMER_CONTAINER = document.querySelector(".countdown-timer .timer-container-spinner .timer-container");
const LANDING_PAGE_SECONDS = LANDING_PAGE_TIMER_CONTAINER.querySelector(".seconds .number");
const LANDING_PAGE_MINUTES = LANDING_PAGE_TIMER_CONTAINER.querySelector(".minutes .number");
const LANDING_PAGE_HOURS = LANDING_PAGE_TIMER_CONTAINER.querySelector(".hours .number");
const LANDING_PAGE_DAYS = LANDING_PAGE_TIMER_CONTAINER.querySelector(".days .number");


// Takes in a date string and counts down the time from now until then.
function getCountdownTime(end) {
    const now = new Date();
    const endDate = new Date(end);

    const difference = endDate.getTime() - now.getTime();

    if (difference < 0)
        return { error: "Given date must be in the future." }

    const dayDiff = Math.ceil(difference / (1000 * 3600 * 24));
    const hourDiff = Math.ceil(difference / (1000 * 3600) + 4) % 24;
    const minDiff = Math.ceil(difference / (1000 * 60) - 1) % 60;
    const secDiff = Math.ceil(difference / (1000)) % 60;

    return {
        d: dayDiff,
        h: hourDiff,
        m: minDiff,
        s: secDiff
    }

}

function setUpCountdownTimer() {

    let diffObject;
    setDiffObject();

    function setDiffObject() {

        diffObject = getCountdownTime('10/24/2022');

        if (diffObject.error) {
            LANDING_PAGE_SECONDS.innerHTML = 0;
            LANDING_PAGE_MINUTES.innerHTML = 0;
            LANDING_PAGE_HOURS.innerHTML = 0;
            LANDING_PAGE_DAYS.innerHTML = 0;
            clearInterval(secondsInterval);
            return;
        }

        LANDING_PAGE_SECONDS.innerHTML = diffObject.s;
        LANDING_PAGE_MINUTES.innerHTML = diffObject.m;
        LANDING_PAGE_HOURS.innerHTML = diffObject.h;
        LANDING_PAGE_DAYS.innerHTML = diffObject.d;
    }

    const secondsInterval = setInterval(() => {

        animateElement(diffObject.s);
        if (diffObject.s < 0)
            setDiffObject();
        diffObject.s = diffObject.s - 1;

    }, 1000);

}
function animateElement(time) {
    LANDING_PAGE_SECONDS.innerHTML = time;
    LANDING_PAGE_SECONDS.classList.remove('scroll-anim');
    LANDING_PAGE_SECONDS.classList.add('scroll-anim');
}
setUpCountdownTimer();