import React from "react";

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
                <span>Click here to start <br/> Google Drive Upload</span>
                <div className="google"></div>
            </GooglePicker>

        );
    }

}
export default GoogleDocs;