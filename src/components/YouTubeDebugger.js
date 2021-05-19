// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
        bitrate: 8,
        video: {
        resolution: '1080p'}
        }
    }

    handleChangeBitrate=()=>{
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 
                12
            }
        })

        console.log(this.state.settings.bitrate)

    }

    handleChangeResolution=()=>{
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
        console.log(this.state.settings.video)

    }

    render() {
        return (
            <div>
                <button 
                className='bitrate'
                onClick={this.handleChangeBitrate}>
                Change bitrate
                </button>

                <button
                    className= 'resolution'
                    onClick ={this.handleChangeResolution}>
                    Change resolution
                </button>
            </div>
        
        );
    }
}

export default YouTubeDebugger;
