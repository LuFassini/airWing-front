
import Home from "../screens/Hoteis";
import Category from "../screens/Category";
import { user } from "../data/Profile";
import Form from "../screens/Form";
import Termos from "../screens/Termos";
import QuemSomos from "../screens/QuemSomos";
import Logo from "../components/Logo";
import CentralDeAjuda from "../screens/CentralDeAjuda";
import Pacotes from "../screens/Pacotes"
import Hoteis from "../screens/Hoteis";



const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (   
    <Drawer.Navigator screenOptions={{ headerShown: true, drawerPosition: 'right',
}}> 
      <Drawer.Screen
        name="Home"
        component={Home}
        
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
      <Drawer.Screen
        name="Hotéis"
        component={Hoteis}
        initialParams={{ data: user }}
        options={{
          headerTitle: () => (
            <Logo />
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Perfil",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Category"
        component={Category}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Categorias",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Form"
        component={Form}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="edit-2"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Cadastro",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
           <Drawer.Screen
        name="Termos"
        component={Termos}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
            
              name="menu"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          
          drawerLabel: "Termos",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
           <Drawer.Screen
        name="Quem Somos"
        component={QuemSomos}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
            
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          
          drawerLabel: "Quem Somos",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
       <Drawer.Screen
        name="Central de Ajuda"
        component={CentralDeAjuda}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
            
              name="info"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          
          drawerLabel: "Central de ajuda",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
      <Drawer.Screen
        name="Pacotes"
        component={Pacotes}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="package"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Pacotes",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
