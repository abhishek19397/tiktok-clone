import React from "react";
import styles from "../../styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { uploadVideo } from "../../actions/index";
import { updateVideo } from "../../actions/video";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";

class CameraUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraRef: null,
      recording: false,
      type: null,
      hasPermission: null,
      videoUrl: null,
    };
  }

  startRecording = async () => {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.AUDIO_RECORDING
    );

    if (status === "granted") {
      if (!this.state.recording) {
        this.setState({ recording: true });
        const video = await this.camera.recordAsync();
        var url = await this.props.dispatch(uploadVideo(video));
        url ? this.props.navigation.navigate("Upload") : null;
        console.log(url);
        if (!video.cancelled) {
          this.setState({ recording: false });
        }
      } else {
        await this.camera.stopRecording();
        this.setState({ recording: false });
      }
    }
  };

  render() {
    return (
      <Camera
        style={{ flex: 1 }}
        ref={(ref) => {
          this.camera = ref;
        }}
        type={Camera.Constants.Type.back}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ paddingLeft: 30 }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Ionicons color={"white"} name={"ios-arrow-back"} size={50} />
          </TouchableOpacity>
        </SafeAreaView>
        <TouchableOpacity
          style={this.state.recording ? styles.redButton : styles.whiteButton}
          onPress={() => this.startRecording()}
        />
      </Camera>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ uploadVideo, updateVideo }, dispatch);
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(CameraUpload);
