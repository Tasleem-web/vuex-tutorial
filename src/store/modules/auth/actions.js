import auth from '../../../API/auth';

export const doLogin = ({ commit, dispatch }, loginData) => {

    auth.login(loginData)
        .then(resp => {
            console.log(resp);
            let message;
            if (resp.data.token === false) {
                message = 'danger';
            } else {
                message = 'success';
                localStorage.setItem('accessToken', resp.data.token);
                commit('ACCESS_TOKEN', null);
                commit('UPDATE_ACCESS_TOKEN', resp.data.token);
                window.location.href = "/"
            }

            dispatch('addNotifications', {
                type: message,
                message: resp.data.message
            }, { root: true });
        })
        .catch(error => {
            dispatch('addNotifications', {
                type: 'danger',
                message: error
            }, { root: true });
            window.location.href = "/login"
        });
}


export const fetchAccessToken = ({ commit }) => {
    // dispatch('addNotifications', {
    //     type: 'danger',
    //     message: "Removed all product from cart"

    // }, { root: true });
    commit('UPDATE_ACCESS_TOKEN', localStorage.getItem('accessToken'))
}

export const logout = ({ commit }) => {
    commit('ACCESS_TOKEN', null);
    localStorage.removeItem('accessToken');
}