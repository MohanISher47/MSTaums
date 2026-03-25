if (!localStorage.getItem("scriptKey")) {
    localStorage.setItem("scriptKey", "off");
}

if (localStorage.getItem("scriptKey") === "off") {
    const user = prompt("Enter:");
    if (user === "Scripts1427$$") {
        localStorage.setItem("scriptKey", "on");
    }
}