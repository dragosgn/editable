import React from "react"

export default(WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        edit: false
      }

      this.enterEdit = this.enterEdit.bind(this)
      this.exitEdit = this.exitEdit.bind(this)
    }

    enterEdit() {
      this.setState({edit: true})
    }

    exitEdit() {
      this.setState({edit: false})
    }

    render() {
      return (<WrappedComponent {...this.props} enterEdit={this.enterEdit}>
        )
      }
    }
}
