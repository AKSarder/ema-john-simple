const db = {};

const addToDb = (item) => {
    const db = getDb();

    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    console.log(db);
    savedToDb(db)

}

const removeFromDb = (item) => {
    const db = getDb();
    delete db[item];
    savedToDb(db)

}

const savedToDb = (db) => {
    const JSONDb = JSON.stringify(db);
    localStorage.setItem('shopping-cart', JSONDb)
}

const getDb = () => {

    let savedDb = localStorage.getItem('shopping-cart');
    savedDb = JSON.parse(savedDb);

    // let savedDb = localStorage.getItem('shopping-cart');
    // savedDb = JSON.parse(savedDb);
    console.log(typeof savedDb, savedDb);
    return savedDb;
}