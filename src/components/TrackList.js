import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
class TrackList extends Component {
    static propTypes = {
        tracks: PropTypes.array
    }

    static defaultProps = {
        tracks: []
    }

    render() {
        return (
            <div>
                {
                    this.props.tracks.map( (track) => {
                        return <div key={track.id}>Track: {track.title}</div>
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state){
    const tracks = state.track
    return {tracks}
}

export default connect(mapStateToProps)(TrackList);