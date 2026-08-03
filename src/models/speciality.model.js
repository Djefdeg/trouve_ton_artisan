const db= require ('../config/mysqlDb');

exports.getAll = async() => {
    const [rows] = await db.query("SELECT * FROM speciality");
    return rows;
};

exports.getOne = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM speciality WHERE id_speciality = ?",
        [id]
    );
    return rows[0];
};

exports.create = async (speciality) => {
    const {
        name,
        id_category
    } = speciality;
    const [result] = await db.query(
        `INSERT INTO speciality 
        (name, id_category)
        VALUES (?, ?)`,
        [name, id_category]
    );
    return result;
};

exports.update = async (speciality, id) => {

    const {
        name,
        id_category
    } = speciality;

    const [result] = await db.query(

        `UPDATE speciality
         SET
            name = ?,
            id_category = ?
        
         WHERE id_speciality = ?`,

        [
            name,
            id_category,
            id
        ]
    );

    return result;
};

exports.delete = async (id) => {
    const [result] = await db.query(
        "DELETE FROM speciality WHERE id_speciality = ?",
        [id]
    );

    return result;
};