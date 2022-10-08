const halloween = "31 Oct 2022";

function countdown() {
    const halloweenDate = new Date(halloween);
    const currentDate = new Date();

    const totalSeconds = (halloweenDate - currentDate) / 1000;

    const days = math.floor(totalSeconds / 3600 / 24);
    const hours = math.floor(totalSeconds / 3600) % 24;
    const minutes = math.floor(totalSeconds / 60) % 60;
    const seconds = math.floor(totalSeconds) % 60;
}

// intial call
countdown();