// KaTeX dependency
import katex from "katex";
window.katex = katex;
import "katex/dist/katex.css";

// Quill dependency
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

// MathQuill dependency
import "./jquery";
import "@edtr-io/mathquill/build/mathquill.js";
import "@edtr-io/mathquill/build/mathquill.css";

// mathquill4quill include
import mathquill4quill from "mathquill4quill";
import "mathquill4quill/mathquill4quill.css";

// demo page
import React from "react";

const operators = [
  ["\\pm", "\\pm"],
  ["+", "+"],
  ["-", "-"],
  ["\\div", "\\div"],
  ["\\pm", "\\pm"],
  ["\\sqrt{x}", "\\sqrt"],
  ["\\sqrt[3]{x}", "\\sqrt[3]{}"],
  ["\\sqrt[n]{x}", "\\nthroot"],
  ["\\frac{x}{y}", "\\frac"],
  ["\\sum^{s}_{x}{d}", "\\sum"],
  ["\\prod^{s}_{x}{d}", "\\prod"],
  ["\\coprod^{s}_{x}{d}", "\\coprod"],
  ["\\int^{s}_{x}{d}", "\\int"],
  ["\\binom{n}{k}", "\\binom"]
];

const displayHistory = false;
const displayDeleteButtonOnHistory = false;
const options = { displayHistory , operators, displayDeleteButtonOnHistory };

export default class Editor extends React.Component {
  reactQuill = React.createRef();

  componentDidMount() {
    const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill, katex });
    enableMathQuillFormulaAuthoring(
      this.reactQuill.current.editor,
      options
    );
  }

  render() {
    return (
      <main className="demo-container">
       <ReactQuill
        ref={this.reactQuill}
        id="editor"
        modules={{
          formula: true,
          toolbar: [["formula"]]
        }}
        placeholder="Type text here, or click on the formula button to enter math."
        theme="snow"
      />
      </main>
    );
  }
}
