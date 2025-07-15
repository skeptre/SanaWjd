import React from "react";

const Home = () => (
	<div className="navbar bg-base-100 shadow-sm">
		{/* Left: Brand or logo */}
		<div className="navbar-start">
			<a className="btn btn-ghost text-xl">Sana</a>
		</div>
		<button className="btn btn-primary">Primary</button>
		{/* Center: hidden on small screens */}
		<div className="navbar-center hidden lg:flex">
			<ul className="menu menu-horizontal px-1">
				<li><a>Home</a></li>
				<li><a>Work</a></li>
				<li><a>Contact</a></li>
			</ul>
		</div>

		{/* Right: search + avatar */}
		<div className="navbar-end flex gap-2">
			<input type="text" placeholder="Search"
				   className="input input-bordered w-24 md:w-auto"/>
			<div className="dropdown dropdown-end">
				<div tabIndex={0}
					 className="btn btn-ghost btn-circle avatar">
					<div className="w-10 rounded-full">
						<img
							src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							alt="avatar"/>
					</div>
				</div>
				<ul tabIndex={0}
					className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
					<li><a className="justify-between">Profile<span
						className="badge">New</span></a></li>
					<li><a>Settings</a></li>
					<li><a>Logout</a></li>
				</ul>
			</div>
		</div>
	</div>
);

export default Home;
