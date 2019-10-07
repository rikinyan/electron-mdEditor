import React from 'react';
import 'marked';

const markdownArea = this.refs.MarkdownArea;
const htmlfiedArea = this.refs.Htmlfied;

console.log("eventjs")

// when change markdown-text
markdownArea.onChange = () => {
  const htmlfied = marked(markdownArea.value);
  htmlfiedArea.value = htmlfied;
  console.log("yes");
};
