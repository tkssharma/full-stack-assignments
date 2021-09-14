"use strict";

export default {
  user: {
    setHasPassword(status) {
      localStorage.user_hasPassword = status;
    },
    getHasPassword() {
      return localStorage.user_hasPassword || false;
    },

    setUserType(type) {
      localStorage.user_userType = type;
    },
    getUserType() {
      return localStorage.user_userType || 1;
    }
  }
};
