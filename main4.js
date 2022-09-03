// Sizga number (yil) turiga kiruvchi va string (oy nomi) turiga kiruvchi 2 ta o’zgaruvchi berilgan. Sizning vazifangiz berilgan oy nomiga bog’liq ravishda shu oydagi kunlar sonini chiqarib berishdan iborat. Bu masalani yechishda switch / case statementdan foydalanishingiz kerak. Kabisa yilini ham hisobga oling!
function KabisaYearandDays(year,month) {
    switch (month) {
        case "Yanvar":
        case "Mart":
        case "May":
        case "Iyul":
        case "Avgust":
        case "Oktyabr":
        case "Dekabr":
        console.log(month, " oyida 31 kun bor");
        break;
        case "Fevral":
        if (year % 4 === 0) console.log(month, "oyida 29 kun bor");
        else console.log(month," oyida 28 kun bor");
        break;
        case "Aprel":
        case "Iyun":
        case "Sentyabr":
        case "Noyabr":
        console.log(month, " oyida 30 kun bor"); 
        default:
            console.log("Bunday oy yo'q");
    }
}

KabisaYearandDays(1994,"Fevral");


