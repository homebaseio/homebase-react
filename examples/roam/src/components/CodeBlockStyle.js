import styled from 'styled-components'

const CodeBlockStyle = styled.div`
  --code-background: #fafdff;
  --code-variable: #24292e;
  --code-keyword: #d73a49;
  --code-operator: #005cc5;
  --code-function: #6f42c1;
  --code-function-variable: #e36209;
  --code-parameter: #24292e;
  --code-number: #005cc5;
  --code-string: #032f62;
  --code-class-name: #22863a;
  --code-property-access: #005cc5;
  --code-attr-name: #005cc5;
  --code-regex: #24292e;
  --code-comment: #1b1f234d;
  --code-linenumber: #1b1f234d;

  position: relative;

  code {
    color: var(--code-variable);
    background: none;
    font-family: Hasklig, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }
  pre {
    color: var(--code-variable);
    background: var(--code-background);
    font-family: Hasklig, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    overflow: auto;    
    border-radius: 3px;
    border: 1px solid #d1d5db;
  }
  :not(pre) > code[class*=\language-\] {
    background: #282a36;
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
  }

  .comment {
    color: var(--code-comment);
  }
  .prolog {
    color: var(--code-comment);
  }
  .doctype {
    color: var(--code-comment);
  }
  .cdata {
    color: var(--code-comment);
  }

  .linenumber {
    color: var(--code-linenumber);
  }

  .namespace {
    Opacity: .7;
  }
  
  .property {
    color: var(--code-regex);
  }
  .tag {
    color: var(--code-regex);
  }
  .constant {
    color: var(--code-regex);
  }
  .regex {
    color: var(--code-regex);
  }
  .deleted {
    color: var(--code-regex);
  }

  .boolean {
    color: var(--code-number);
  }
  .number {
    color: var(--code-number);
  }
  .selector {
    color: var(--code-string);
  }
  .attr-name {
    color: var(--code-attr-name);
  }
  .string {
    color: var(--code-string);
  }
  .char {
    color: var(--code-string);
  }
  .builtin {
    color: var(--code-string);
  }
  .inserted {
    color: var(--code-string);
  }
  
  .operator {
    color: var(--code-operator);
  }
  .entity {
    color: var(--code-variable);
    cursor: help;
  }
  .url {
    color: var(--code-variable);
  }
  .language-css .token.string {
    color: var(--code-variable);
  }
  .style .token.string {
    color: var(--code-variable);
  }
  .variable {
    color: var(--code-variable);
  }

  .atrule {
    color: var(--code-function);
  }
  .attr-value {
    color: var(--code-function);
  }
  .function {
    color: var(--code-function);
  }
  
  .function-variable {
    color: var(--code-function-variable);
  }

  .class-name {
    color: var(--code-class-name);
  }

  .parameter {
    color: var(--code-parameter);
  }
  .regex {
    color: var(--code-regex);
  }

  .property-access {
    color: var(--code-property-access);
  }

  .method {
    color: var(--code-function);
  }

  .script-punctuation {
    color: var(--code-keyword);
  }
  .keyword {
    color: var(--code-keyword);
  }

  .punctuation {
    color: var(--code-variable);
  }

  .important {
    color: var(--code-regex);
    font-weight: bold;
  }

  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
`

export default CodeBlockStyle
