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
      <View style={styles.View_4_99}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9480/7a8d/9801ab7d371227303cc3a332d7a80272"
          }}
          style={styles.ImageBackground_4_100}
        />
      </View>
      <View style={styles.View_4_101} />
      <View style={styles.View_4_102}>
        <View style={styles.View_4_103} />
        <View style={styles.View_4_104}>
          <Text style={styles.Text_4_104}>Try again?</Text>
        </View>
      </View>
      <View style={styles.View_4_105}>
        <Text style={styles.Text_4_105}>
          Who is the President of the Wisconsin Senate?
        </Text>
      </View>
      <View style={styles.View_4_107} />
      <View style={styles.View_4_108} />
      <View style={styles.View_4_109}>
        <Text style={styles.Text_4_109}>Devin LeMahieu</Text>
      </View>
      <View style={styles.View_4_110} />
      <View style={styles.View_4_114} />
      <View style={styles.View_4_111}>
        <Text style={styles.Text_4_111}>James Jones</Text>
      </View>
      <View style={styles.View_4_112}>
        <Text style={styles.Text_4_112}>Chris Kapenga</Text>
      </View>
      <View style={styles.View_4_113}>
        <Text style={styles.Text_4_113}>Janet Bewley</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_4_99: {
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
  ImageBackground_4_100: {
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
  View_4_101: {
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
  View_4_102: {
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
  View_4_103: {
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
  View_4_104: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("4.197901049475263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.999999999999993%"),
    top: hp("2.5487256371814198%")
  },
  Text_4_104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_105: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    minHeight: hp("8.695652173913043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("15.142428785607196%")
  },
  Text_4_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_107: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    height: hp("17.991004497751124%"),
    minHeight: hp("17.991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("51.724137931034484%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 59, 48, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_4_108: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    height: hp("17.991004497751124%"),
    minHeight: hp("17.991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("51.724137931034484%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(139, 139, 139, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_4_109: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("8.845577211394302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.2%"),
    top: hp("56.37181409295352%")
  },
  Text_4_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_110: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    height: hp("17.991004497751124%"),
    minHeight: hp("17.991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("31.184407796101947%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(139, 139, 139, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_4_114: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    height: hp("17.991004497751124%"),
    minHeight: hp("17.991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("31.184407796101947%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(139, 139, 139, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_4_111: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("8.845577211394302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.2%"),
    top: hp("35.83208395802099%")
  },
  Text_4_111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_112: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("8.845577211394302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("35.68215892053973%")
  },
  Text_4_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_113: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("8.845577211394302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("56.37181409295352%")
  },
  Text_4_113: {
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
