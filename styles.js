import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },

  border: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  backgroundVideo: {
    height: height,
    width: width,
  },
  roundImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
  },
  whiteButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: "center",
    backgroundColor: "#fff",
    marginBottom: 50,
  },
  redButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: "center",
    backgroundColor: "red",
    marginBottom: 50,
  },
  uploadVideo: {
    height: (height * 60) / 100,
    width: width,
  },
});
