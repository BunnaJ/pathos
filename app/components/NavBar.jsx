import React from 'react'
import Logo from '../ui/Logo'
import NavList from './reusable/NavList'

const navItems = [
  {name:'Home', link:'/'},
  {name:'About', link:'/about'},
  {name:'Experience', link:'/experience'},
  {name:'Contact', link:'/contact'},
  {name:'FAQ', link:'/faq'},
]
const logsItem = [
  {name:'Login', link: '/login'},
  {name:'Register', link: '/register'}
]
export default function NavBar() {
  return (
    <div className=' mx-auto max-w-7xl px-4 py-6 flex items-center justify-around '>
      <Logo/>
      <NavList items={navItems}/>
      <NavList items={logsItem}/>
    </div>
  )
}
