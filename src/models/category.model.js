const db= require ('../config/database');

exports.getAll = async() => {
    const [rows] = await db.query("SELECT * FROM category");
    return rows;
};

exports.getOne = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM category WHERE id_category = ?",
        [id]
    );

    return rows[0];
};

exports.create = async (category) => {
    const {
        name
    } = category;
    const [result] = await db.query(
        `INSERT INTO category 
        (name)
        VALUES (?)`,
        [name]
    );
    return result;
};

exports.update = async (category, id) => {

    const {
        name
    } = category;

    const [result] = await db.query(

        `UPDATE category
         SET
            name = ?
         WHERE id_category = ?`,

        [
            name,
            id
        ]
    );

    return result;
};

exports.delete = async (id) => {
    const [result] = await db.query(
        "DELETE FROM category WHERE id_category = ?",
        [id]
    );

    return result;
};