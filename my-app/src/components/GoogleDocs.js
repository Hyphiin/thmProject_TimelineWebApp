import React from "react";
import {hoverButton, hoverExitButton} from "./Animation";
import $ from "jquery"
import {findDOMNode} from "react-dom";
import {Link} from 'react-router-dom';
import GooglePicker from 'react-google-picker';


import LocalStorageUsage from "./localStorageUsage";

class GoogleDocs extends React.Component {

    render(){
        return (
            <GooglePicker clientId={'1057260951853-bflr8jkajvavpmgk5i7snjqlhfi071s7.apps.googleusercontent.com'}
                          developerKey={'AIzaSyCWW22efNvt5YIvWs8pV3M2-YZjbEDEPlA'}
                          scope={['https://www.googleapis.com/auth/drive.readonly']}
                          onChange={data => console.log('on change:', data)}
                          onAuthFailed={data => console.log('on auth failed:', data)}
                          multiselect={true}
                          navHidden={true}
                          authImmediate={false}
                          viewId={'DOCS'}
                          mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                          createPicker={ (google, oauthToken) => {
                              const googleViewId = google.picker.ViewId.DOCS;
                              const uploadView = new google.picker.DocsUploadView();
                              const docsView = new google.picker.DocsView(googleViewId)
                                  .setIncludeFolders(true)
                                  .setSelectFolderEnabled(true);

                              const picker = new window.google.picker.PickerBuilder()
                                  .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
                                  .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                                  .addView(docsView)
                                  .addView(uploadView)/*DocsUploadView added*/
                                  .setOAuthToken(oauthToken)
                                  .setDeveloperKey('AIzaSyCWW22efNvt5YIvWs8pV3M2-YZjbEDEPlA')
                                  .setCallback((data)=>{
                                      if (data.action == google.picker.Action.PICKED) {
                                          var fileId = data.docs[0].id;
                                          alert('The user selected: ' + fileId);
                                          //picker();
                                      }
                                  });
                              picker.build().setVisible(true);
                          }}>
                <span>Click here</span>
                <div className="google"></div>
            </GooglePicker>

        );
    }




   /* login(){

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
            localStorage.setItem("googleData",url);
        }
    }

    upload(){
            let loc=localStorage.getItem("googleData");
            let zwischen=loc.split("?");
            let search ="?"+zwischen[1];
            console.log(search)
            const urlParams = new URLSearchParams(search);
            const code = urlParams.get('code');
            console.log(code);
            const redirect_uri = "http://localhost:3000"; // replace with your redirect_uri;
            const client_secret = "h9EpQ7-n9ebU39PMk7dkjFBQ"; // replace with your client secret
            const scope = "https://www.googleapis.com/auth/drive";
            var access_token= "";
            var client_id = "1057260951853-1hap6fgn6vnm0dhl15qh88angt7umttc.apps.googleusercontent.com"; // replace it with your client id;


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
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false,
                    timeout: 60000
                });
            };



            $("#upload").on("click", function (e) {

                var file =LocalStorageUsage();
                var blob = new Blob([file],{type: "text/plain"});
                var upload = new Upload(blob);

                // maby check size or type here with upload.getSize() and upload.getType()

                // execute upload
                upload.doUpload();
            });





    }
 /*
    upload() {
        $(document).ready(function () {
            const url = "https://www.googleapis.com/upload/drive/v3/files?uploadType=media";
            var file = LocalStorageUsage();
            var blob = new Blob([file], {type: "text/plain"});
            const data = blob;

            $("#upload").click(function () {
            $.ajax({
                    type: 'POST',
                    url: url,
                    data: data,
                    headers: {'Content-Type': 'text'},
                    success: function (result) {
                        console.log(result);
                    },
                    error: function (error) {
                        console.log(error);
                    }
                }
            )
        })
        })
    }

    <button onClick={()=>this.login()}> Google Docs Login </button>
        <button onClick={()=>this.upload()} id="upload"> Upload to <br/> Google Docs </button>



*/

}
export default GoogleDocs;