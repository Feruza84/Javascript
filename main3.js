// Sizga number turiga kiruvchi 3 ta o’zgaruvchi berilgan bo’lsin. Ushbu o’zgaruvchilardan qaysi ikkitasini yig’indisi eng katta bo’lishini aniqlab, shu ikkita o’zgaruvchi va ularning yig’indisini consolega chiqaruvchi dastur tuzing.
let a = 10,
  b = 15,
  c = 40;
let x = a + b;
let y = b + c;
let z = a + c;
if (x > y && y > z) {
  console.log(a, b, x);
} else if (y > z && y > x) {
  console.log(b, c, y);
} else {
  console.log(a, c, z);
}
