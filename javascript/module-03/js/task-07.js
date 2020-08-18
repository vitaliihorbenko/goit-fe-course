"use strict";

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
  ID: 0,
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,
  ID: 1,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: Transaction.ID++,
      amount,
      type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      alert("На вашому рахунку недостатньо коштів. Пішов ти");
    } else {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
    }
  },

  /*
   * Метод возвращает текущий баланс
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    // console.log(this.transactions)
    for (let el of this.transactions) {
        console.log(el);
        for (let key in el) {
            if (key === id) {}
        }
      if (el.id === id) {
        return el;
      } else {
        alert("Такой транзакции нет");
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};

console.log(account.getBalance());
console.log(account.createTransaction(700, Transaction.WITHDRAW));
console.log(account.transactions);
account.deposit(3850);
console.log(account.getBalance());
console.log(account.transactions);
account.deposit(4200);
console.log(account.getBalance());
console.log(account.transactions);
account.withdraw(1000);
console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
