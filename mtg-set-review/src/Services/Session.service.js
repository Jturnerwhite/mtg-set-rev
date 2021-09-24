
export default class SessionService {
    LocalStorgeKey = "mtgr-sessions";
    SessionCache = null;

    constructor() {
        this.SessionCache = this.GetSessions();
    }

    CreateSession = function(set, privacy) {
        let newSession = {
            id: this.SessionCache.length,
            set: set,
            privacy: privacy,
            created: new Date().toDateString()
        };

        this.SessionCache[newSession.id] = newSession;
        this.UpdateLocalStorage();
    };

    SetSession = function(session) {
        this.SessionCache[session.id] = session;
        this.UpdateLocalStorage();
    };

    UpdateLocalStorage = function() {
        window.localStorage.setItem(this.LocalStorgeKey, JSON.stringify(this.SessionCache));
    }

    Get = function(id) {
        id = id ? id : 0;

        if(this.SessionCache && this.SessionCache.length > 0) {
            return this.SessionCache[id] ? this.SessionCache[id] : null;
        }

        return null;
    };

    GetAll = function() {
        return this.SessionCache;
    }

    GetSessions = function() {
        let storageEntry = window.localStorage.getItem(this.LocalStorgeKey);

        if(storageEntry) {
            try {
                let sessions = JSON.parse(storageEntry);

                if(sessions && sessions.length > 0) {
                    return sessions;
                }
            }
            catch(e) {
                return [];
            }
        } else {
            window.localStorage.setItem(this.LocalStorgeKey, JSON.stringify([]));
        }

        return [];
    }
}