const Artisan = require("./artisan.model");
const Category = require("./category.model");
const City = require("./city.model");
const Speciality = require("./speciality.model");

// associations

Category.hasMany(Speciality, {
    foreignKey: "id_category"
});

Speciality.belongsTo(Category, {
    foreignKey: "id_category"
});

Speciality.hasMany(Artisan, {
    foreignKey: "id_speciality"
});

Artisan.belongsTo(Speciality, {
    foreignKey: "id_speciality"
});

City.hasMany(Artisan, {
    foreignKey: "id_city"
});

Artisan.belongsTo(City, {
    foreignKey: "id_city"
});

module.exports = {
    Artisan,
    Category,
    City,
    Speciality
};
