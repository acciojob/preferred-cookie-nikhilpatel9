const color = document.getElementById("fontcolor");
const size = document.getElementById("fontsize");
const save = document.getElementById("save");

// Load saved preferences
document.cookie.split("; ").forEach(cookie => {
    const [name, value] = cookie.split("=");

    if (name === "fontsize") {
        size.value = parseInt(value);
        document.documentElement.style.setProperty("--fontsize", value);
    }

    if (name === "fontcolor") {
        color.value = value;
        document.documentElement.style.setProperty("--fontcolor", value);
    }
});

// Save preferences
save.onclick = () => {
    document.cookie = `fontsize=${size.value}px`;
    document.cookie = `fontcolor=${color.value}`;

    document.documentElement.style.setProperty("--fontsize", size.value + "px");
    document.documentElement.style.setProperty("--fontcolor", color.value);
};