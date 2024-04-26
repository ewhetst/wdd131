const copyWrite = "&copy"
let lastModDate = document.lastModified
let currentYear = new Date().getFullYear()
 
document.querySelector("#currentYear").innerHTML = copyWrite + currentYear
document.querySelector("#lastModified").innerHTML = `Last Modifed: ${lastModDate}`