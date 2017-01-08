/**
 * Created by ilyapolyakov on 1/6/17.
 */
export class User {
    constructor(sequileze, DataTypes) {
        var User = sequelize.define("User", {
            username: DataTypes.STRING,
            password: DataTypes.STRING
        });
        return User;
    }
};

// export. function (sequileze, DataTypes) {
//     var User = sequelize.define("User", {
//         username: DataTypes.STRING
//     });
//
//     return User;
// };