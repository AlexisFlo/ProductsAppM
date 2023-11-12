import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("prueba.db");

db.transaction((tx) => {
  tx.executeSql(
    "create table if not exists ORDERS (id integer primary key not null, product text, quantity integer, price real);"
  );
});

export const insertOrder = (product, quantity, price) => {
  db.transaction((tx) => {
    tx.executeSql("select * from ORDERS", [], (_, { rows }) => console.log(JSON.stringify(rows)));
  });
};

export const getOrders = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from ORDERS",
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
};
