import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const UserProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='w-[90%] mx-auto'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-5 my-5">
                    {/* <!-- Page content here --> */}

                    <Outlet />

                </div>
                <div className='bg-slate-700 rounded-3xl my-5'>
                    <div className="drawer-side mt-3 mx-auto">
                        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                        <ul className="menu overflow-y-auto w-80 pt-10  text-white ">
                            {/* <!-- Sidebar content here --> */}
                            <div className='pb-10'><img className='mx-auto rounded-full' src={user?.photoURL} alt="" /></div>
                            <li><Link to="/dashboard" className=' hover:bg-slate-900 py-2 mb-2 rounded-2xl'>My Profile</Link></li>
                            {user && <>
                                <li><Link to="/profile/education" className=' hover:bg-slate-900 py-2 mb-2 rounded-2xl'>Education</Link></li>
                                <li><Link to="#" className=' hover:bg-slate-900 py-2 mb-2 rounded-2xl'>Skill Set</Link></li>
                                <li><Link to="#" className=' hover:bg-slate-900 py-2 mb-2 rounded-2xl'>Course</Link></li>
                                <li><Link to="#" className=' hover:bg-slate-900 py-2 mb-2 rounded-2xl'>Course Request</Link></li>
                            </>}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;