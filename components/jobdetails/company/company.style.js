import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: '75%',
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.small,
  },
  logoImage: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.lightWhite
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
  companyInfoBox: {
    marginTop: SIZES.small / 2.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 17,
    height: 17,
    tintColor: COLORS.black,
  },
  locationName: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});

export default styles;
