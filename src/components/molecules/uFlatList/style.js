import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        flexDirection:"row",
        //backgroundColor:Colors.listColor,
        borderRadius:20,
        width:UserDevice.deviceWidht*.95, flex:1
    }
})