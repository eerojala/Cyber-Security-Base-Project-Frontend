import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Redirector extends React.Component {
    render () {
        if (this.props.redirect === null || this.props.redirect === undefined) {
            return null
        }

        return <Redirect to={this.props.redirect} />
    }
}

const mapStateToProps = (state) => {
    return { redirect: state.redirect }
}

export default connect (mapStateToProps) (Redirector)