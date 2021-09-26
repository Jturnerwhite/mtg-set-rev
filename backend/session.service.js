
class SessionService {
    Cache = [];

    constructor() {
        this.Cache = [];
    }

    Set = function(session) {
        if(!session.id) {
            session.id = this.GetSillyUniqueId();
        }

        this.Cache[session.id] = session;
        return session.id;
    }

    Get = function(id) {
        return this.Cache[id];
    }

    GetAll = function() {
        return this.Cache;
    }

    GetSillyUniqueId = function() {
        let x = new Date().getTime();
        return x.toString().split('').reduce((accu, current) => {
            return accu += String.fromCharCode(97 + parseInt(current));
        }, "");
    }

    Validate = function(session) {
        if(session.privacy > 1) {
            return false;
        }
        // validate set here, somehow.

        return true;
    }
}

module.exports = SessionService;