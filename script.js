console.log("Я загадал число от 1 до 10. Попробуй угадать его!");

let secretNumber = Math.floor(Math.random() * 10) + 1;
let atempts = 3;

while (atempts > 0) {
    let nomber = Number(prompt("Введите число:"));

    if (nomber > secretNumber) {
        console.log("загадонное число меньше");
        atempts--;
        console.log("у вас осталось " + atempts + " попыток");
    } else if (nomber === secretNumber) {
        console.log("вы угадали число!");
        break
    } else {
        console.log("загаданное число больше");
        atempts--;
        console.log("у вас осталось " + atempts + " попыток");
    }
}