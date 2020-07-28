// const toggleSwitch = document.querySelector(
//     '.theme-switch input[type="checkbox"]'
// );

const toggleSwitch = $('.theme-switch input[type="checkbox"]');


function switchTheme(e) {
    if (e.target.checked) {
        // document.documentElement.setAttribute("data-theme", "dark");
        $(document.documentElement).attr("data-theme", "dark");
    } else {
        // document.documentElement.setAttribute("data-theme", "light");
        $(document.documentElement).attr("data-theme", "light");
    }
}

// toggleSwitch.addEventListener("change", switchTheme, false);
toggleSwitch.change(switchTheme);


// let input = document.getElementById("input");
let input = $("#input");

// let output = document.getElementById("output");
let output = $("#output");


function carculate(date) {
    switch (date) {
        case 'AC':
            // input.html() = "";
            input.html("");
            // output.innerHTML = 0;
            output.html(0);
            break;

        case 'C':
            // input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
            input.html(input.html().substr(0, input.html().length - 1));
            // output.innerHTML = math.evaluate(input.innerHTML) === undefined ? 0 : math.evaluate(input.innerHTML);
            output.html(math.evaluate(input.html()) === undefined ? 0 : math.evaluate(input.html()));
            break;

        case "=":
            // output.innerHTML = math.evaluate(input.innerHTML);
            output.html(math.evaluate(input.html()));
            break;

        default:
            // input.innerHTML += date;
            input.html(input.html() + date);
    }
}












