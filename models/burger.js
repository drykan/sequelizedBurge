module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};

// db.Burger.create( {
//   burger_name: "Bacon Burger",
//   devoured: false  
// })
// .then(function (dbBurger) {
//   console.log(dbBurger);
// });