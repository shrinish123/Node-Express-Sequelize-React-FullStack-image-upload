module.exports = (sequelize, DataTypes) => {

    const Patient = sequelize.define("patient", {
       
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER
        },
        emergency_contact: {
            type: DataTypes.INTEGER
        },
        blood_group: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        gender: {
            type: DataTypes.STRING
        },
    
    })

    return Patient

}