import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EmployList } from "./employ/EmployList";
import { EmployCreate } from "./employ/EmployCreate";
import { EmployEdit } from "./employ/EmployEdit";
import { EmployShow } from "./employ/EmployShow";
import { ManegerList } from "./maneger/ManegerList";
import { ManegerCreate } from "./maneger/ManegerCreate";
import { ManegerEdit } from "./maneger/ManegerEdit";
import { ManegerShow } from "./maneger/ManegerShow";
import { DsafaList } from "./dsafa/DsafaList";
import { DsafaCreate } from "./dsafa/DsafaCreate";
import { DsafaEdit } from "./dsafa/DsafaEdit";
import { DsafaShow } from "./dsafa/DsafaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Employ"
          list={EmployList}
          edit={EmployEdit}
          create={EmployCreate}
          show={EmployShow}
        />
        <Resource
          name="Maneger"
          list={ManegerList}
          edit={ManegerEdit}
          create={ManegerCreate}
          show={ManegerShow}
        />
        <Resource
          name="Dsafa"
          list={DsafaList}
          edit={DsafaEdit}
          create={DsafaCreate}
          show={DsafaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
