import React, { Component } from "react";
import ReactQuill from "react-quill";
import { post } from "../../api/blog";

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: false,
            editorHtml: "",
            title: "",
            snippet: "",
            post: "",
            file: null
        }
    }

    handleBlog = () => {
        const { blog } = this.state;
        this.setState({blog: !blog});
    }

    handleTitle = (e) => {
        let title = "";
        this.setState({title});
    }
    
    handlePost = (html) => {
        this.setState({editorHtml: html});
    }

    handleFile = (e) => {
        let reader = new FileReader();
        reader.onload = (data) => {
            console.log(data);
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    handleSnippet = (e) => {
        let snippet = "";
        this.setState({snippet});
    }

    handlePublish = () => {
        const { editorHtml } = this.state;
        post({title: "hello", author: "SouagueN", snippet: "hello world", post: editorHtml}, this.props.token).then((res) => {
            console.log(res);
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
                                    handleChange={this.handleChange}
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
        <textarea></textarea>
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