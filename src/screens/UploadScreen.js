import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateDescription, uploadVideo } from "../../actions/video";
import { Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import { Video } from "expo-av";
import styles from "../../styles";

class UploadScreen extends React.Component {
  componentWillUnmount = async () => {
    const { playbackInstance } = this.state;
    await playbackInstance.pauseAsync();
  };

  uploadVideo = () => {
    this.props.uploadVideo();
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.container}>
        <Video
          ref={(ref) => (this._videoRef = ref)}
          source={{
            uri: this.props.video.videoUrl,
          }}
          resizeMode="cover"
          useNativeControls
          onFullscreenUpdate={this.onFullscreenUpdate}
          style={styles.uploadVideo}
        />
        <View>{console.log(this.props.video)}</View>
        <TextInput
          style={styles.border}
          value={this.props.video.description}
          onChangeText={(text) => this.props.updateDescription(text)}
          placeholder="Description"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.uploadVideo}
        >
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateDescription, uploadVideo }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    video: state.video,
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadScreen);
