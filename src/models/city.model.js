const db= require ('../config/database');

exports.getAll = async() => {
    const [rows] = await db.query("SELECT * FROM city");
    return rows;
};

exports.getOne = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM city WHERE id_city = ?",
        [id]
    );

    return rows[0];
};

exports.create = async (city) => {
    const {
        name
    } = city;
    const [result] = await db.query(
        `INSERT INTO city 
        (name)
        VALUES (?)`,
        [name]
    );
    return result;
};

exports.update = async (city, id) => {

    const {
        name
    } = city;

    const [result] = await db.query(

        `UPDATE city
         SET
            name = ?
         WHERE id_city = ?`,

        [
            name,
            id
        ]
    );

    return result;
};

exports.delete = async (id) => {
    const [result] = await db.query(
        "DELETE FROM city WHERE id_city = ?",
        [id]
    );

    return result;
};