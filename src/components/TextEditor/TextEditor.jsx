import React, { Component } from 'react'
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor'
import createInlineToolbarPlugin, { Separator } from '@draft-js-plugins/inline-toolbar'
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from '@draft-js-plugins/buttons'
import '@draft-js-plugins/inline-toolbar/lib/plugin.css'
import editorStyles from './editorStyles.module.css'

class HeadlinesPicker extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.addEventListener('click', this.onWindowClick)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick)
  }

  onWindowClick = () => this.props.onOverrideContent(undefined)

  render() {
    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton]
    return (
      <div>
        {buttons.map((Button, i) => (
          <Button key={i} {...this.props} />
        ))}
      </div>
    )
  }
}

class HeadlinesButton extends Component {
  onMouseDown = (event) => event.preventDefault()

  onClick = () => this.props.onOverrideContent(HeadlinesPicker)

  render() {
    return (
      <div onMouseDown={this.onMouseDown} className={editorStyles.headlineButtonWrapper}>
        <button onClick={this.onClick} className={editorStyles.headlineButton}>
          H
        </button>
      </div>
    )
  }
}

const inlineToolbarPlugin = createInlineToolbarPlugin()
const { InlineToolbar } = inlineToolbarPlugin
const plugins = [inlineToolbarPlugin]
const text = 'Enter your text...'

export default class CustomInlineToolbarEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
  }

  componentDidMount() {
    this.setState({
      editorState: createEditorStateWithText(text),
    })
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    })
  }

  focus = () => {
    this.editor.focus()
  }

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorKey="CustomInlineToolbarEditor"
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => {
            this.editor = element
          }}
        />
        <InlineToolbar>
          {(externalProps) => (
            <div>
              <BoldButton {...externalProps} />
              <ItalicButton {...externalProps} />
              <UnderlineButton {...externalProps} />
            </div>
          )}
        </InlineToolbar>
      </div>
    )
  }
}
