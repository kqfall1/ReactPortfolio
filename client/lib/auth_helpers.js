const auth = {
    authenticate(jwt) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('jwt', JSON.stringify(jwt));
        }
    }, 

    clearJwt() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('jwt');
            document.cookie = 't=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        }
    }, 

    isAuthenticated() {
        const jwt = localStorage.getItem('jwt')
        
        if (typeof window != 'undefined' 
            && jwt 
            && jwt != 'undefined' ) {
            return JSON.parse(localStorage.getItem('jwt'));
        }
        else {
            return false;
        }
    } 
}

export default auth 