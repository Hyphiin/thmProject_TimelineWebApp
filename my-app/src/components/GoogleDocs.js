import React from "react";

import GooglePicker from 'react-google-picker';

import axios from 'axios';
import LocalStorageUsage from "./localStorageUsage";
import { gapi } from 'gapi-script';
import $ from 'jquery';
import GoogleAuth from 'react-google-auth';

class GoogleDocs extends React.Component {

    start() {
        var GoogleAuth;
        var SCOPE = 'https://www.googleapis.com/auth/drive';

        function handleClientLoad() {
            // Load the API's client and auth2 modules.
            // Call the initClient function after the modules load.
            gapi.load('client:auth2', initClient);
        }

        function initClient() {
            // Retrieve the discovery document for version 3 of Google Drive API.
            // In practice, your app can retrieve one or more discovery documents.
            var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

            // Initialize the gapi.client object, which app uses to make API requests.
            // Get API key and client ID from API Console.
            // 'scope' field specifies space-delimited list of access scopes.
            gapi.client.init({
                'apiKey': 'AIzaSyCWW22efNvt5YIvWs8pV3M2-YZjbEDEPlA',
                'clientId': '1057260951853-bflr8jkajvavpmgk5i7snjqlhfi071s7.apps.googleusercontent.com',
                'discoveryDocs': [discoveryUrl],
                'scope': SCOPE
            }).then(function () {
                GoogleAuth = gapi.auth2.getAuthInstance();

                // Listen for sign-in state changes.
                GoogleAuth.isSignedIn.listen(updateSigninStatus);

                // Handle initial sign-in state. (Determine if user is already signed in.)
                var user = GoogleAuth.currentUser.get();
                setSigninStatus();

                // Call handleAuthClick function when user clicks on
                //      "Sign In/Authorize" button.
                $('#sign-in-or-out-button').click(function () {
                    handleAuthClick();
                });
                $('#revoke-access-button').click(function () {
                    revokeAccess();
                });
            });
        }

        function handleAuthClick() {
            if (GoogleAuth.isSignedIn.get()) {
                // User is authorized and has clicked "Sign out" button.
                GoogleAuth.signOut();
            } else {
                // User is not signed in. Start Google auth flow.
                GoogleAuth.signIn();
            }
        }

        function revokeAccess() {
            GoogleAuth.disconnect();
        }

        function setSigninStatus(isSignedIn) {
            var user = GoogleAuth.currentUser.get();
            var isAuthorized = user.hasGrantedScopes(SCOPE);
            if (isAuthorized) {
                $('#sign-in-or-out-button').html('Sign out');
                $('#revoke-access-button').css('display', 'inline-block');
                $('#auth-status').html('You are currently signed in and have granted ' +
                    'access to this app.');
            } else {
                $('#sign-in-or-out-button').html('Sign In/Authorize');
                $('#revoke-access-button').css('display', 'none');
                $('#auth-status').html('You have not authorized this app or you are ' +
                    'signed out.');
            }
        }

        function updateSigninStatus(isSignedIn) {
            setSigninStatus();
        }


        /*let string= LocalStorageUsage();
        let config = {
            headers: {
                "Content-Type": "text/plain"
            }
        };
        let file = new Blob([string], {type: "text/plain"});
        //scope : https://www.googleapis.com/auth/drive

        let header ={
            headers: {

            }
        };
        axios.post(url)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error);
            })


       /* axios.post("https://www.googleapis.com/upload/drive/v3/files?uploadType=media", file,config )
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error);
            })*/
    }


    render() {
        return <div>
            <button id="sign-in-or-out-button" onClick={()=>this.start()}
                    >Sign In/Authorize
            </button>
            <button id="revoke-access-button"
                    >Revoke access
            </button>

            <div id="auth-status"></div>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
            <script async defer src="https://apis.google.com/js/api.js"
                    onLoad="this.onload=function(){};handleClientLoad()"
                    onreadystatechange="if (this.readyState === 'complete') this.onload()">
            </script>
        </div>

    }
}

export default GoogleDocs;