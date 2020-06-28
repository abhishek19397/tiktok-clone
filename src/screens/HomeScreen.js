import React from "react";

import { Text, View, SafeAreaView } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getVideos } from "../../actions/video";
import styles from "../../styles";
import { Video } from "expo-av";

import Swiper from "react-native-swiper";
class Home extends React.Component {
  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    if (!this.props.video.feed)
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    return (
      <View style={styles.container}>
        <Swiper
          automaticallyAdjustContentInsets={true}
          showsPagination={false}
          index={0}
          loop={true}
          horizontal={false}
        >
          {this.props.video.feed.map((item, index) => {
            return (
              <SafeAreaView>
                <Video
                  ref={(ref) => (this._videoRef = ref)}
                  source={{
                    uri: item.videoUrl,
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={true}
                  resizeMode="stretch"
                  shouldPlay
                  isLooping
                  useNativeControls={true}
                  style={styles.backgroundVideo}
                />
              </SafeAreaView>
            );
          })}
        </Swiper>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getVideos }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    video: state.video,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
