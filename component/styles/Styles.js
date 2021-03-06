import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 25,

  },
  header: {
    fontSize: 20,
    color: 'green',
    alignSelf: 'center'
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  },
  box: {
    width: 100,
    height: 100,

    backgroundColor: 'black',
    alignSelf: "center",

  },
  text: {
    alignSelf: "center",
    color: 'white',
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  },
  fullBox: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: "center",
    alignItems: 'center'
  },
  containerAbout: {
    flex: 1,
    // backgroundColor: 'black'
  },

});