import server from '../../global/config/server';

export default {
	// server: server

	social: {
		facebook: server.url + 'auth/login/facebook',
		google: server.url + 'auth/login/google',
		twitter: server.url + 'auth/login/twitter',
		instagram: server.url + 'auth/login/instagram',
	},

	google: {
		api_key: 'AIzaSyBb7Ms5zllURVGWoJ2QJx6_jly8gyqKY6g',
	},


}
