import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
	return(
		
		<nav style={styles.nav}>
		<h2 style={styles.logo}>WMS</h2>
		
		<ul style={styles.menu}>
		<li>
		<Link to="/dashboard" style={styles.link}>Dashboard</Link>
		</li>
		
		<li>
		<Link to="/products" style={styles.link}>Products</Link>
		</li>
		
		<li>
		<Link to="/orders" style={styles.link}>Orders</Link>
		</li>
		
		<li>
		<Link to="/" style={styles.link}>Logout</Link>
		</li>
		</ul>
		</nav>
	);
}

const styles={
	nav:{
		backgroundColor:"#1976d2",
		color:"white",
		padding:"15px",
		display:"flex",
		justifyContent:"space-between",
		alignItems:"center",
	},
	logo:{
		margin:0,
	},
	menu:{
		listStyle:"none",
		dislpay:"flex",
		gap:"20px",
		margin:0,
		padding:0,
	},
	link:{
		color:"white",
		textDecoration:"none",
		fontWeight:"bold",
	},
}

export default Navbar;