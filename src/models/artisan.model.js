const db= require ('../config/mysqlDb');

exports.getAll = async() => {
    const [rows] = await db.query("SELECT * FROM artisan");
    return rows;
};

exports.getTop = async() => {
    const [rows] = await db.query("SELECT * FROM artisan WHERE top = TRUE");
    return rows;
};

exports.getOne = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM artisan WHERE id_artisan = ?",
        [id]
    );

    return rows[0];
};

exports.create = async (artisan) => {
    const {
        name,
        id_speciality,
        id_city,
        mark,
        about,
        email,
        website,
        top
    } = artisan;
    const [result] = await db.query(
        `INSERT INTO artisan 
        (name, id_speciality, id_city, mark, about, email, website, top)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, id_speciality, id_city, mark, about, email, website, top]
    );
    return result;

};

exports.update = async (artisan, id) => {

    const {
        name,
        id_speciality,
        id_city,
        mark,
        about,
        email,
        website,
        top
    } = artisan;

    const [result] = await db.query(

        `UPDATE artisan
         SET
            name = ?,
            id_speciality = ?,
            id_city = ?,
            mark = ?,
            about = ?,
            email = ?,
            website = ?,
            top = ?
         WHERE id_artisan = ?`,

        [
            name,
            id_speciality,
            id_city,
            mark,
            about,
            email,
            website,
            top,
            id
        ]
    );

    return result;
};

exports.delete = async (id) => {
    const [result] = await db.query(
        "DELETE FROM artisan WHERE id_artisan = ?",
        [id]
    );

    return result;
};