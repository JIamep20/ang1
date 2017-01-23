module.exports = function(app) {
    require('./users/editUserCtrl')(app);
    require('./users/usersListCtrl')(app);
};