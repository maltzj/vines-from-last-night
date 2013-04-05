var definitions = {
    underscored: true 
    , timestamps: true
}

var database = { 
    driver: 'mysql'
    , username: 'root'
    , password: 'password'
    , database: 'vines_from_last_night'
    , options: {
        host: "localhost"
        , port: 3306
        , dialect: 'mysql'
        , define: definitions
    }
};

var config = {
    'database': database
};


module.exports = function(){
    return config;
}();
