export class LocalStorage {


    setAccessToken(access_token) {

        localStorage.setItem('access_token', access_token);

    }


    setRefreshToken(refresh_token) {

        localStorage.setItem('refresh_token', refresh_token);

    }


    /**
  
     * Added a dummy access token so that something should be in bearer token.
  
     */

    getAccessToken() {

        let ls_access_token = localStorage.getItem('access_token');

        if (ls_access_token === null || ls_access_token.length <= 0) {

            ls_access_token = "foRLwPcMhhTeZqLKfS057zzH2FK44ER5B5a45574";

        }

        return ls_access_token;

    }


    getRefreshToken() {

        let ls_refresh_token = localStorage.getItem('refresh_token');

        if (ls_refresh_token === null || ls_refresh_token.length <= 0) {

            ls_refresh_token = ""

        }

        return ls_refresh_token;

    }


}
