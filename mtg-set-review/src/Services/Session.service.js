
export default class SessionService {
    Endpoint = "/api/session/";
    LocalStorgeKey = "mtgr-sessions";
    SessionCache = null;

    constructor() {
    }

    CreateSession = function(set, privacy) {
        let newSession = {
            set: set,
            privacy: privacy,
            created: new Date().toDateString()
        };

        //this.SessionCache[newSession.id] = newSession;
        //this.UpdateLocalStorage();
        this.UpdateServer(newSession).then((data) => {
            console.log(data);
        });
    };

    SetSession = function(session) {
        this.SessionCache[session.id] = session;
        //this.UpdateLocalStorage();
    };

    UpdateLocalStorage = function() {
        window.localStorage.setItem(this.LocalStorgeKey, JSON.stringify(this.SessionCache));
    }

    UpdateServer = function(sessionToSave) {
        return fetch(this.Endpoint, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(sessionToSave)
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        });
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
        const getFromLocal = false;
        let storageEntry = window.localStorage.getItem(this.LocalStorgeKey);

        if(getFromLocal) {
            try {
                let sessions = JSON.parse(storageEntry);

                if(sessions && sessions.length > 0) {
                    return sessions;
                }
            }
            catch(e) {
                window.localStorage.setItem(this.LocalStorgeKey, JSON.stringify([]));
            }
        } else {
            return fetch(this.Endpoint) //fetch all
            .then(response => response.json())
            .then((data) => {
                let sessions = [];
                if(data && data.length > 0) {
                    sessions = data;
                }
                
                window.localStorage.setItem(this.LocalStorgeKey, JSON.stringify([]));
                this.SessionCache = sessions;
                return data;
            });
        }
    }
}