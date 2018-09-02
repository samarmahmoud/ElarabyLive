
import { Platform } from 'react-native';

const style = {
    headerStyle: {
        backgroundColor: '#105291',
        paddingTop: 20,
        height: 80,
        alignItems: 'flex-end',
        justifyContent: 'center',
       ...Platform.select({
            ios:{
                shadowColor: '#3d0000',
                shadowRadius: 5,
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.3,
            },
            android:{
                elevation: 3,
                position:'relative',
            }

        }),
      
    },
    headerImage: {
        width:140,
        height:18,
        marginRight:18,


    },
    text_TitleStyle:{
        color: '#fff',
        fontSize:20,
        
    },
    container: {
       flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'#4a73ab',
    },
    
    Splashcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:99,
        
    },

    SplashParent: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#155da3',
       
    },

    Splash_imageLogo: {
        width: 251,
        height: 32,
    },
    Splash_Spinner: {
        width: 33,
        height: 33,
       
       
    },
    Login_Logo:{
        marginTop:98,
        justifyContent: 'center',
        alignItems:'center',
       
    },
    Login_Text:{
        marginTop:75,
        justifyContent: 'center',
        alignItems:'center',
       
    },
    InputView:{
       marginTop:12,
      width:'100%',
      alignItems:'center'
    },
    InputeCont:{
        marginTop:59,
       justifyContent: 'center',
        alignItems:'center',
      
    },
    ContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
 
    },
    ContainerCardItemStyle: {

        padding: 3,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
 
    TextStyle: {    
        width: '91%',
        marginLeft:4,
        marginRight:4,
        paddingRight: 19,
        paddingBottom:12,
        paddingTop:12,
        borderColor: '#277ed1',
        textAlign: 'right',
        backgroundColor:'rgba(200,195,199,0.4)',
        borderRadius:2,
       

    },
    ButtonStyle: {
       width:'90%',
        backgroundColor: '#e73f17',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#e73f17',
      


    },
    ButtonTextStyle: {
        alignSelf: 'center',
        paddingTop: 12,
        paddingBottom: 14,
        fontSize: 16,
        color: '#fff',
        lineHeight:24,
        fontWeight:'bold',

    },
    ButtonCont:{
        marginTop:25,
        justifyContent: 'center',
        alignItems:'center',

    },
    ForgetPasswordCont:{
        marginTop:30,
        justifyContent: 'center',
        alignItems:'center',
    },
    ForgetPasswordText: {
        fontSize: 14,
        color: '#fff',
        lineHeight:24,
        fontWeight:'bold',

    },




}

export { style };