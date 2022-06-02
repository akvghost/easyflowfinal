import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Workers from '../pages/Workers'
import Companies from '../pages/Companies'
import { Requests } from '../pages/Requests'
import WorkersRequest from '../pages/WorkersRequest'
import CompanyRequest from '../pages/CompanyRequest'
import { Analytics } from '../pages/Analytics'
import { Settings } from '../pages/Settings'
import RegistrationLogin from '../pages/RegistrationLogin'
import { Admin } from '../pages/Admin'
import UpdatePassword from '../pages/UpdatePassword'
import {UpdateAdminPass} from '../pages/UpdateAdminPass'
import { LoginAdmin } from '../pages/LoginAdmin'
import { LoginAdminMobile } from '../pages/LoginAdminMobile'
import { RegisterAdmin } from '../pages/RegisterAdmin'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/workers' component={Workers} />
            <Route path='/companies' component={Companies} />
            <Route path='/requests' component={Requests} />
            <Route path='/workersrequest' component={WorkersRequest} />
            <Route path='/companyrequest' component={CompanyRequest} />
            <Route path='/analytics' component={Analytics} />
            <Route path='/settings' component={Settings} />
            <Route path='/registrationlogin' component={RegistrationLogin} />
            <Route path='/admin' component={Admin} />
            <Route path='/updatePassword' component={ UpdatePassword } />
            <Route path='/updateadminpass' component={ UpdateAdminPass } />
            <Route path='/loginadmin' component={ LoginAdmin } />
            <Route path='/loginadminmobile' component={ LoginAdminMobile } />
            <Route path='/registeradmin' component={ RegisterAdmin } />
        </Switch>
    )
}

export default Routes
