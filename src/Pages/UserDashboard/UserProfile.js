import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../SharedPage/Footer/Loader';

const UserProfile = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loader/>
    }
    console.log(user)

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}

                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 pt-10 bg-slate-500 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <div className='pb-10'><img className='mx-auto rounded-full' src={user?.photoURL} alt="" /></div>
                        <li><Link to="/dashboard" className=' bg-red-200 py-2 mb-2'>My Profile</Link></li>
                        {user && <>
                            <li><Link to="#" className=' bg-red-200 py-2 mb-2'>Education</Link></li>
                            <li><Link to="#" className=' bg-red-200 py-2 mb-2'>Skill Set</Link></li>
                            <li><Link to="#" className=' bg-red-200 py-2 mb-2'>Course Request</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;