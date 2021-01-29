'use strict';

module.exports = function(app) {
    var jsonku = require("./controller");

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.showallmahasiswa);
    
    app.route('/tampil/:id')
        .get(jsonku.showallmahasiswabyid);
    
    app.route('/tambah')
        .post(jsonku.addmahasiswa);
}