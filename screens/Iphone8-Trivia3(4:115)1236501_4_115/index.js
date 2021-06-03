import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_4_116}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9480/7a8d/9801ab7d371227303cc3a332d7a80272"
          }}
          style={styles.ImageBackground_4_117}
        />
      </View>
      <View style={styles.View_4_118} />
      <View style={styles.View_4_119}>
        <View style={styles.View_4_120} />
        <View style={styles.View_4_121}>
          <Text style={styles.Text_4_121}>Next</Text>
        </View>
      </View>
      <View style={styles.View_4_122}>
        <Text style={styles.Text_4_122}>Correct!</Text>
      </View>
      <View style={styles.View_4_129}>
        <Text style={styles.Text_4_129}>
          Chris Kapenga is the President of the Wisconsin Senate.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_4_116: {
    width: wp("100.8%"),
    minWidth: wp("100.8%"),
    height: hp("100.29985007496252%"),
    minHeight: hp("100.29985007496252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8%"),
    top: hp("-0.14992503748125938%")
  },
  ImageBackground_4_117: {
    width: wp("100.8%"),
    minWidth: wp("100.8%"),
    height: hp("100.29985007496252%"),
    minHeight: hp("100.29985007496252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_4_118: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("84.1079460269865%"),
    minHeight: hp("84.1079460269865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.845577211394302%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_119: {
    width: wp("45.6%"),
    minWidth: wp("45.6%"),
    height: hp("9.145427286356822%"),
    minHeight: hp("9.145427286356822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.200000000000003%"),
    top: hp("76.91154422788605%")
  },
  View_4_120: {
    width: wp("45.6%"),
    minWidth: wp("45.6%"),
    height: hp("9.145427286356822%"),
    minHeight: hp("9.145427286356822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(70, 69, 106, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_4_121: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("4.197901049475263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2.5487256371814198%")
  },
  Text_4_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_122: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("18.4407796101949%")
  },
  Text_4_122: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_129: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    minHeight: hp("13.343328335832084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%"),
    top: hp("42.87856071964018%")
  },
  Text_4_129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
