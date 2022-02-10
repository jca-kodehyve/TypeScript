// Question 1
const secondsInDay = 24 * 60 * 60;
console.log("Nombre de seconds dans 1 jour :", secondsInDay);

// Question 2
const secondsInYear = 365 * secondsInDay;
console.log("Nombre de seconds dans 1 an :", secondsInYear);

// Question 3
const secondsInMonth = secondsInYear / 12;
console.log("Nombre de seconds dans 1 mois :", secondsInMonth);

// Question 4
function secondsBetween(y1: number, m1: number, d1: number, y2: number, m2: number, d2: number) {
    const yearDif = (y2 - y1) * secondsInYear;
    const monthDif = (m2 - m1) * secondsInMonth;
    const dayDif = (d2 - d1) * secondsInDay;
    return yearDif + monthDif + dayDif;
}
console.log("Nombre de seconds entre 01/01/2022 et 18/01/2023 :", secondsBetween(2022, 1, 1, 2023, 1, 18));

// Question 5
const now = new Date();
console.log("Nombre de seconds depuis 1900 :", secondsBetween(1900, 1, 1, now.getFullYear(), now.getMonth() +1, now.getDate()));

// Question 6

// Question 7
const birthDate = new Date(2000, 7, 15);
const today = new Date();
console.log(`Nombre de secondes depuis ${birthDate.toLocaleDateString()} : ${Math.trunc((today.getTime() - birthDate.getTime()) / 1000)}`)

