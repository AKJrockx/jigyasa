import React from 'react';
import { NavLink } from 'react-router-dom';
import hashnodeIcon from '../assets/images/hashnode.png';
import devIcon from '../assets/images/dev.webp';
import hackernewsIcon from '../assets/images/hackernews.png';
import producthuntIcon from '../assets/images/producthunt.png';
import githubIcon from '../assets/images/github.png';
import techcrunchIcon from '../assets/images/techcrunch.png';
import logo from '../assets/images/main_logo.png';




const Sidebar = () => {
    return (
        <div className="bg-gray-800  p-4 md:h-screen h-full">


            <div className="bg-gray-700 p-4 flex items-center rounded-xl shadow-sm">
                <span className="bg-gray-800 p-2 text-2xl rounded-xl mr-2">
                    <img className="w-20" src={logo}></img>
                </span>
                <div>
                    <h1 className="text-2xl text-white font-bold   ">
                        Jigyasa
                    </h1>
                    <span className="text-gray-400 italic text-sm">
                        Top posts from the best dev sites.
                    </span>
                </div>
            </div>


            <div className="flex  flex-col justify-center my-4 bg-gray-700 rounded-xl shadow-sm">

                <NavLink to="/" >
                    <div className="transform hover:scale-105 hover:bg-gray-400 duration-100 p-4 flex rounded-xl items-center bg-gray-700 ">
                        <img src={hashnodeIcon} alt="logo"
                            className="h-12 w-12 "
                        />
                        <p className="text-2xl px-4 font-bold text-white">Hashnode</p>
                    </div>
                </NavLink>

                <NavLink to="/dev" activeClassName='border rounded-xl'>
                    <div className=" transform hover:scale-105 hover:bg-gray-400 duration-100 p-4  flex items-center rounded-xl bg-gray-700   ">
                        <img src={devIcon} alt="logo"
                            className="h-12 w-12 "
                        />
                        <p className="text-2xl px-4 font-bold text-white">Dev.to</p>
                    </div>
                </NavLink>

                <NavLink to="/hackernews" activeClassName='border rounded-xl'>
                    <div className=" transform hover:scale-105 hover:bg-gray-400 duration-100 p-4  flex items-center rounded-xl bg-gray-700   ">
                        <img src={hackernewsIcon} alt="logo"
                            className="h-12 w-12 "
                        />
                        <p className="text-2xl px-4 font-bold text-white">HackerNews</p>
                    </div>
                </NavLink>

                <NavLink to="/producthunt" activeClassName='border rounded-xl'>
                    <div className=" transform hover:scale-105 hover:bg-gray-400 duration-100 p-4 flex items-center  rounded-xl bg-gray-700  ">
                        <img src={producthuntIcon} alt="logo"
                            className="h-12 w-12  "
                        />
                        <p className="text-2xl px-4 font-bold text-white">Product Hunt</p>
                    </div>
                </NavLink>

                <NavLink to="/techcrunch" activeClassName='border rounded-xl'>
                    <div className="transform hover:scale-105 hover:bg-gray-400 duration-100 flex p-4 items-center  rounded-xl bg-gray-700  ">
                        <img src={techcrunchIcon} alt="logo"
                            className="h-12 w-12 "
                        />
                        <p className="text-2xl px-4 font-bold text-white">Techcrunch</p>
                    </div>
                </NavLink>

                <NavLink to="/github" activeClassName='border rounded-xl'>
                    <div className=" transform hover:scale-105 hover:bg-gray-400 duration-100 p-4  flex items-center rounded-xl bg-gray-700  ">
                        <img src={githubIcon} alt="logo"
                            className="h-12 w-12  "
                        />
                        <p className="text-2xl px-4 font-bold text-white">Github</p>
                    </div>
                </NavLink>


            </div>
        </div>
    );
}

export default Sidebar;