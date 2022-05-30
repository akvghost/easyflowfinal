import React from 'react'
import { Route, Switch } from 'react-router-dom'


import Dashboard from '../pages/Dashboard'
import {Worker} from '../pages/Worker'
import { About } from '../pages/About'
import { Company } from '../pages/Company'


import { UpdateWorkerProfile } from '../pages/UpdateWorkerProfile'
import { UpdateWorkerPassword } from '../pages/UpdateWorkerPassword'
import { WorkerReport } from '../pages/WorkerReport'
import { WorkerSendRequest } from '../pages/WorkerSendRequest'
import { UpdateWorkerPass } from '../pages/UpdateWorkerPass'


import { UpdateCompanyProfile } from '../pages/UpdateCompanyProfile'
import { UpdateCompanyPassword } from '../pages/UpdateCompanyPassword'
import { UpdateCompanyPass } from '../pages/UpdateCompanyPass'
import { CompanyReport } from '../pages/CompanyReport'
import { CompanySendRequest } from '../pages/CompanySendRequest'
import { RegisterWorker } from '../pages/RegisterWorker'
// import {PostForm} from '../pages/PostForm'
import { PreviousWorkers } from '../pages/PreviousWorkers'
import { PreviousCompany } from '../pages/PreviousCompany'
import { RegisterCompany } from '../pages/RegisterCompany'
import { LoginCompany } from '../pages/LoginCompany'
import { LoginWorker } from '../pages/LoginWorker'
import { WorkerViewRequest } from '../pages/WorkerViewRequest'
import { CompanyViewRequest } from '../pages/CompanyViewRequest'



const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/worker' component={Worker}/>
            <Route path='/about' component={About}/>
            <Route path='/company' component={Company}/>
            <Route path='/updateworkerprofile' component={UpdateWorkerProfile}/>
            <Route path='/updateworkerpassword' component={UpdateWorkerPassword}/>
            <Route path='/updateworkerpass' component={UpdateWorkerPass}/>
            <Route path='/workerreport' component={WorkerReport}/>
            <Route path='/workersendrequest' component={WorkerSendRequest}/>
            <Route path='/registerworker' component={RegisterWorker}/>
            <Route path='/loginworker' component={LoginWorker}/>
            {/* <Route path='/postForm' component={PostForm}/> */}
            <Route path='/previouscompany' component={PreviousCompany}/>
            <Route path='/workerviewrequest' component={WorkerViewRequest}/>
            



            <Route path='/updatecompanyprofile' component={UpdateCompanyProfile}/>
            <Route path='/updatecompanypassword' component={UpdateCompanyPassword}/>
            <Route path='/updatecompanypass' component={UpdateCompanyPass}/>
            <Route path='/companyreport' component={CompanyReport}/>
            <Route path='/Companysendrequest' component={CompanySendRequest}/>
            <Route path='/previousworkers' component={PreviousWorkers}/>
            <Route path='/registercompany' component={RegisterCompany}/>
            <Route path='/logincompany' component={LoginCompany}/>
            <Route path='/companyviewrequest' component={CompanyViewRequest}/>

        </Switch>
    )
}

export default Routes
