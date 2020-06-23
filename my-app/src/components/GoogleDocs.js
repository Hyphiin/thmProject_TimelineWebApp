import React from "react";
import {hoverButton, hoverExitButton} from "./Animation";

import LocalStorageUsage from "./localStorageUsage";

class GoogleDocs extends React.Component {

    login(){

        // client id of the project

        let clientId = "1057260951853-1hap6fgn6vnm0dhl15qh88angt7umttc.apps.googleusercontent.com";

        // redirect_uri of the project

        let redirect_uri = "http://localhost:3000";

        // scope of the project

        let scope = "https://www.googleapis.com/auth/drive";

        // the url to which the user is redirected to

        let url = "";

            signIn(clientId,redirect_uri,scope,url);

        function signIn(clientId,redirect_uri,scope,url){

            // the actual url to which the user is redirected to

            url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
                +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
                +"&access_type=offline";

            // this line makes the user redirected to the url

            window.location = url;
        }
    }

    upload(){

          /*  const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            const redirect_uri = "http://localhost:3000"; // replace with your redirect_uri;
            const client_secret = "h9EpQ7-n9ebU39PMk7dkjFBQ"; // replace with your client secret
            const scope = "https://www.googleapis.com/auth/drive";
            var access_token= "";
            var client_id = "1057260951853-1hap6fgn6vnm0dhl15qh88angt7umttc.apps.googleusercontent.com"// replace it with your client id;


            $.ajax({
                type: 'POST',
                url: "https://www.googleapis.com/oauth2/v4/token",
                data: {code:code
                    ,redirect_uri:redirect_uri,
                    client_secret:client_secret,
                    client_id:client_id,
                    scope:scope,
                    grant_type:"authorization_code"},
                dataType: "json",
                success: function(resultData) {


                    localStorage.setItem("accessToken",resultData.access_token);
                    localStorage.setItem("refreshToken",resultData.refreshToken);
                    localStorage.setItem("expires_in",resultData.expires_in);
                    window.history.pushState({}, document.title, "/GitLoginApp/" + "upload.html");




                }
            });

            function stripQueryStringAndHashFromPath(url) {
                return url.split("?")[0].split("#")[0];
            }

            var Upload = function (file) {
                this.file = file;
            };

            Upload.prototype.getType = function() {
                localStorage.setItem("type",this.file.type);
                return this.file.type;
            };
            Upload.prototype.getSize = function() {
                localStorage.setItem("size",this.file.size);
                return this.file.size;
            };
            Upload.prototype.getName = function() {
                return this.file.name;
            };
            Upload.prototype.doUpload = function () {
                var that = this;
                var formData = new FormData();

                // add assoc key values, this will be posts values
                formData.append("file", this.file, this.getName());
                formData.append("upload_file", true);

                $.ajax({
                    type: "POST",
                    beforeSend: function(request) {
                        request.setRequestHeader("Authorization", "Bearer" + " " + localStorage.getItem("accessToken"));

                    },
                    url: "https://www.googleapis.com/upload/drive/v2/files",
                    data:{
                        uploadType:"media"
                    },
                    xhr: function () {
                        var myXhr = $.ajaxSettings.xhr();
                        if (myXhr.upload) {
                            myXhr.upload.addEventListener('progress', that.progressHandling, false);
                        }
                        return myXhr;
                    },
                    success: function (data) {
                        console.log(data);
                    },
                    error: function (error) {
                        console.log(error);
                    },
                    async: true,
                    //data: formData,
                    cache: false,
                    contentType: false,
                    processData: false,
                    timeout: 60000
                });
            };



            $("#upload").on("click", function (e) {
                var file =LocalStorageUsage();
                var upload = new Upload(file);

                // maby check size or type here with upload.getSize() and upload.getType()

                // execute upload
                upload.doUpload();
            });

*/



    }

    render() {
        return <div>
        <button onClick={()=>this.login()}> Google Docs Login </button>
        <button onClick={()=>this.upload()} id="upload"> Upload to <br/> Google Docs </button>
        </div>
    }
}
export default GoogleDocs;