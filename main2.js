// Sizga number turiga kiruvchi o’zgaruvchi berilgan bo’lsin. Ushbu o’zgaruvchi qiymati 16 dan kichik yoki teng bo’lsa, consolega O’quvchi, 16 dan katta 25 dan kichik bo’lsa, console Talaba, 25 dan katta 60 dan kichik bo’lsa consolega Ishchi va 60 dan katta bo’lsa consolega Nafaqaxo’r deb chiqarib beruvchi dastur tuzing. 
 let a = 62;
 if (a <= 16) {
   console.log("O'quvchi");
 } else if (a > 16 && a < 25) {
   console.log("Talaba");
 } else if (a > 25 && a < 60) {
   console.log(Ishchi);
 } else if (a>60) {
   console.log("Nafaqaho'r");
 } else {
  console.log("Noto'g'ri raqam kiritdingiz");
 }