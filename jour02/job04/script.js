document.addEventListener("keydown", function(event)
{
    const keylogger = document.getElementById("keylogger");
    console.log(`Key pressed: ${event.key}`);
    console.log(keylogger.value)
    keylogger.value = keylogger.value + event.key;

});
