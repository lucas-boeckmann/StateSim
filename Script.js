const Body = document.getElementsByTagName("body")
const LightModeSwitch = document.getElementById("LightModeSwitch")

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))