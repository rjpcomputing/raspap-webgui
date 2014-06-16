var refresh_rate = 5; //<-- In seconds, change to your needs
var last_user_action = 0;
var lost_focus = true;
var focus_margin = 10; // If we lose focus more then the margin we want to refresh
var allow_refresh = true; // on off sort of switch

function keydown(evt) {
    if (!evt) evt = event;
    if (evt.keyCode == 192) {
        // Shift+TAB
        toggle_on_off();
    }
} // function keydown(evt)


function toggle_on_off() {
    if (can_i_refresh) {
        allow_refresh = false;
        console.log("Auto Refresh Off");
    } else {
        allow_refresh = true;
        console.log("Auto Refresh On");
    }
}

function reset() {
    last_user_action = 0;
    console.log("Reset");
}

function windowHasFocus() {
    lost_focus = false;
    console.log(" <~ Has Focus");
}

function windowLostFocus() {
    lost_focus = true;
    console.log(" <~ Lost Focus");
}

setInterval(function () {
    last_user_action++;
    refreshCheck();
}, 1000);

function can_i_refresh() {
    if (last_user_action >= refresh_rate && lost_focus && allow_refresh) {
        return true;
    }
    return false;
}

function refreshCheck() {
    var focus = window.onfocus;

    if (can_i_refresh()) {
        window.location.reload(); // If this is called no reset is needed
        reset(); // We want to reset just to make sure the location reload is not called.
    } else {
        console.log("Timer");
    }

}
window.addEventListener("focus", windowHasFocus, false);
window.addEventListener("blur", windowLostFocus, false);
window.addEventListener("click", reset, false);
window.addEventListener("mousemove", reset, false);
window.addEventListener("keypress", reset, false);
window.onkeyup = keydown;

