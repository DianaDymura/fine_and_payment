
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
//let fineNumber = document.getElementById("fineNumber");
//let passport = document.getElementById("passport");
//let creditCardNumber = document.getElementById("creditCardNumber");
//let cvv = document.getElementById("cvv");
//let amount = document.getElementById("amount");
//let buttonSubmit = document.getElementById("payFine");

/**Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;
let fineNumber = document.getElementById("fineNumber");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine")

Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */

//варіант 1 для валідації номеру штрафа  
/** 
let getFineNumber = () => {
        switch (fineNumber.value) {
            case "001":
                console.log('Перевищення швидкості');
                break;
            case "002":
                console.log('Невірне паркування');
                break;
            case "003":
                console.log('Їзда у не тверезому стані');
                case "004":
                console.log('Їзда у не тверезому стані');
                break;
            case "005":
                console.log('Невірне паркування');
                break;
                default:
                    console.log('Номер не співпадає');
                    break;
        }
    };
    getFineNumber();
    */
   
    //варіант 2 валідація номеру штрафа
    "use strict";
let getFineNumber = () => {
  let fineNumber = document.getElementById("fineNumber");
  switch (fineNumber.value) {
    case "001":
      console.log(fineNumber.value);
      break;
    case "002":
      console.log(fineNumber.value);
      break;
    case "003":
      console.log(fineNumber.value);
    case "004":
      console.log(fineNumber.value);
      break;
    case "005":
      console.log(fineNumber.value);
      break;
    default:
      console.log('Номер не співпадає');
      break;
        }
    };
    getFineNumber();
    //валідація суми штрафа
    let amount = document.getElementById("amount");
    let fineNumber = getFineNumber();
    if (fineNumber === '001'){
       amount.value = 100
    } else if (fineNumber === '003'|| fineNumber === '004'|| fineNumber === '005') {
         amount.value = 200
    } else if (fineNumber === '002') {
        amount.value = 50
    } else {
        console.log ("Сума не співпадає")
    }
    //валідація номера паспорта
    let passport = document.getElementById("passport");
    var re = /^[а-яА-Я]{2}\d{6}$/;
function validatePassport() {
  if (re.test(passport.value)) {
    console.log(passport.value);
  } else {
    console.log("Невірний паспортний номер");
  }
}
//валідація кредитної карти
let creditCardNumber = document.getElementById("creditCardNumber");
var check = /^\d{16}$/;
function validatecreditCardNumber() {
  if (check.test(creditCardNumber.value)) {
    console.log(creditCardNumber.value);
  } else {
    console.log("Невірна кредитна картка");
  }
}
//валідація cvv кода
let cvv = document.getElementById("cvv");
var ver = /^\d{3}$/;
function validatecvv() {
  if (ver.test(cvv.value)) {
    console.log(cvv.value);
  } else {
    console.log("Невірний cvv");
  }
}  
//виконання оплати - обраний елемент з відповідним індексом видаляється з масиву методом splice()
 let buttonSubmit = document.getElementById("payFine")
 const fineNumberSelect = document.getElementById("fineNumber");
 let fines = ['001','002','003', '004','005'];
buttonSubmit.addEventListener('click',payFine);
function payFine(){
  const selectedFine = fineNumberSelect.value;  
  const index = fines.indexOf(selectedFine);
  if (index !== -1) {//+ додана умова, що індекс елементу не може бути негативним
    fines.splice(index, 1);
  }
}
