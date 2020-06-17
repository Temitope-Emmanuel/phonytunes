import React from 'react'
import UserComponent from "../components/userComponent/userComponent"
import Navbar from "../components/other/Navbar"

// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'


const Profile = () => {
  const {user,loading} = useFetchUser()

  return (
    <>
    {/* <Navbar/> */}
    <UserComponent/>
    </>
    )
}
export default Profile

// function Profile() {
//   const { user, loading } = useFetchUser({ required: true })

//   return (
//     <Layout user={user} loading={loading}>
//       {loading ? <>Loading...</> : <ProfileCard user={user} />}
//     </Layout>
//   )
// }
