import React from "react"
import {compose} from "recompose"

export default(WrappedComponent) => (
  return class extends React.Component {
    constructor(props){
      super(props)
      this.enterEdit = this.enterEdit.bind(this)
    }

    enterEdit() {

    }

    render() {
      return(
        <WrappedComponent {...this.props} enterEdit={this.enterEdit}>
      )
    }
  }
)
