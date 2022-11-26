import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { AddEmp } from '../components/AddEmp/add'
import { Edit } from '../components/EditEmp/Edit'
import { HomePage } from '../pages/homepage'

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddEmp />} />
        <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  )
}

export default AppRoutes