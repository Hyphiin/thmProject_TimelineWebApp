import React from "react";
import ReactDOM from "react-dom";
import {hoverButton, hoverExitButton} from "./Animation";

function FileInput() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
                //console.log('RESULT', reader.result)
                localStorage.setItem('file', reader.result)
            };
            reader.readAsDataURL(file);
        }
    };

    function clearImage() {
        localStorage.removeItem('file');
        window.location.reload(false);
    }

    return (
        <form
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                    display: "none"
                }}
            />
            <div
                style={{
                    height: "50%",
                    width: "50%",
                    border: "1px dashed black"
                }}
                onClick={() => imageUploader.current.click()}
            >
                <img
                    ref={uploadedImage}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </div>
            Click to upload Image
            <input className="button" type="reset" onClick={clearImage} onMouseEnter={e => hoverButton(e)}
                   onMouseOut={e => hoverExitButton(e)}/>
        </form>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FileInput/>, rootElement);
export default FileInput;