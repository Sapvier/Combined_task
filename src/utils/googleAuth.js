export const onLoad = () => {
    window.gapi.load('auth2', function() {
        window.gapi.auth2.init(
            {
                client_id: `329385351437-1i1mg0trorrlnckai6mqscb3el21v4td.apps.googleusercontent.com`,
            }
        );
    });
}

export const googleSignOut = () => {
    if (window.gapi) {
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signOut()
        return true
    }
}