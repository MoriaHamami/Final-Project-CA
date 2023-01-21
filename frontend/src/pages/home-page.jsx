import React from 'react'
import { Link } from 'react-router-dom'


export function HomePage() {

    // // <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
    // var toolbarOptions = [
    //     ["bold", "italic", "underline", "strike"], // toggled buttons
    //     ["blockquote", "code-block"],

    //     [{ header: 1 }, { header: 2 }], // custom button values
    //     [{ list: "ordered" }, { list: "bullet" }],
    //     [{ script: "sub" }, { script: "super" }], // superscript/subscript
    //     [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    //     [{ direction: "rtl" }], // text direction

    //     [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    //     [{ header: [1, 2, 3, 4, 5, 6, false] }],
    //     ["link", "image"],
    //     [({ color: [] }, { background: [] })], // dropdown with defaults from theme
    //     [{ font: [] }],
    //     [{ align: [] }],

    //     ["clean"] // remove formatting button
    // ];
    // let quill = new Quill("#editor", {
    //     theme: "snow",
    //     modules: {
    //         toolbar: toolbarOptions
    //     }
    // });
    // const delta = quill.getContents();
    // // console.log(">>", { quill }, quill.root.innerHTML);
    // // console.log({ delta });

    // function insertStar() {
    //     const cursorPosition = this.quill.getSelection().index;
    //     this.quill.insertText(cursorPosition, "★");
    //     this.quill.setSelection(cursorPosition + 1);
    // }

    // return <div>
    //     <div id="toolbar">ToolBar</div>
    //     <p>Hello World!</p>
    //     <p>Some initial <strong>bold</strong> text</p>
    // </div>
    return (
        <section>
            <h2>this is home page</h2>
            <Link to="/WapDemos">
                <button>Get Started</button>
            </Link>
        </section >
    )
}