import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';


const { publicRuntimeConfig } = getConfig();

// const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const baseUrl = `${publicRuntimeConfig}/users`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue() { return userSubject.value },
    logout,
    logoutUser,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};


function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    localStorage.removeItem('idshoper');
    localStorage.removeItem('session');
    userSubject.next(null);
    // Router.push('/account/login');
    Router.push('/');
}

function logoutUser() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    localStorage.removeItem('idshoper');
    localStorage.removeItem('session');
    userSubject.next(null);
    window.location.reload(true);
    // Router.push('/account/login');
    // Router.push('/');
}

function register(user) {
    // return fetchWrapper.post(`${baseUrl}/register`, user);
    return fetchWrapper.post(`https://zde4h.sse.codesandbox.io/api/users/register`, user);
}

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params)
        .then(x => {
            // update stored user if the logged in user updated their own record
            if (id === userSubject.value.id) {
                // update local storage
                const user = { ...userSubject.value, ...params };
                localStorage.setItem('user', JSON.stringify(user));

                // publish updated user to subscribers
                userSubject.next(user);
            }
            return x;
        });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
