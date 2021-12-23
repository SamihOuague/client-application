import React, { Component } from "react";
import ReactQuill from "react-quill";
import { post } from "../../api/blog";
import { upload } from "../../api/image";

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: false,
            editorHtml: "",
            title: "",
            snippet: "",
            post: "",
            img: null
        }
    }

    handleBlog = () => {
        const { blog } = this.state;
        this.setState({blog: !blog});
    }

    handleTitle = (e) => {
        let title = e.target.value;
        this.setState({title});
    }
    
    handlePost = (html) => {
        this.setState({editorHtml: html});
    }

    handleFile = (e) => {
        let reader = new FileReader();
        reader.onload = (data) => {
            this.setState({img: data.target.result});
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    handleSnippet = (e) => {
        let snippet = e.target.value;
        this.setState({snippet});
    }

    handlePublish = () => {
        const { editorHtml, title, snippet, img } = this.state;
        upload({img}).then((res) => {
            if (res.message) {
                post({title, author: "SouagueN", snippet, img: res.message, post: editorHtml}, this.props.token).then((res) => {
                    console.log(res);
                });
            }
        });
    }

    render() {
        return(
            <section className="panel">
                <h1 className="panel--title">Welcome to the Panel</h1>
                <div className="panel__container">
                    {(!this.state.blog) ?
                            <BtnGroup handleBlog={this.handleBlog}/>
                        :
                            <BlogPost handlePublish={this.handlePublish} 
                                    handlePost={this.handlePost}
                                    handleFile={this.handleFile}
                                    handleSnippet={this.handleSnippet}
                                    handleTitle={this.handleTitle}
                            />
                    }
                </div>
            </section>
        );
    }
}

const BtnGroup = (props) => (
    <div className="panel__container__buttons">
        <button className="btn btn-primary" onClick={props.handleBlog}>Articles de Blog</button>
        <button className="btn btn-primary">Gestion de la Boutique</button>
    </div>
);

const BlogPost = (props) => (
    <div className="panel__container__post">
        <input onChange={props.handleTitle} className="panel__container__post--input" type="text" placeholder="Titre du post"/>
        <input onChange={props.handleFile} className="panel__container__post--input" type="file"/>
        <textarea onChange={props.handleSnippet}></textarea>
        <ReactQuill 
            className="panel__container__post--textarea"
            modules={Panel.modules}
            onChange={props.handlePost}
        />
        <button onClick={props.handlePublish} className="btn btn-primary-sm">Publier</button>
    </div>
);

Panel.modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}

export default Panel;