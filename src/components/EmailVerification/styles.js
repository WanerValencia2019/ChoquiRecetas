import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
	container: {
		marginTop: 24,
		display: "flex",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	title: { textAlign: "center", fontSize: 30 },
	codeFiledRoot: {
		marginTop: 20,
		width: 280,
		marginLeft: "auto",
		marginRight: "auto",
	},
	cellRoot: {
		width: 60,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
	},
	cellText: {
		color: "#000",
		fontSize: 36,
		textAlign: "center",
	},
	focusCell: {
		borderBottomColor: "#1FCC79",
		borderBottomWidth: 2,
	},
});
