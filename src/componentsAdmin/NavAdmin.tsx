import './NavAdmin.css';
function NavAdmin(){
    return(
        <div className="sidebar">
            <img src="logo.png" alt="Logo" className="logo" />
            <h2>Admin Dashboard</h2>
            <nav>
                <a href="#" className="active"><span className="icon"></span> Statistics</a>
                <a href="#"><span className="icon"></span> Offers</a>
                <a href="#"><span className="icon"></span> Members</a>
                <a href="#"><span className="icon"></span> Subscriptions</a>
                <a href="#"><span className="icon"></span> Products management</a>
                <a href="#"><span className="icon"></span> Classes</a>
            </nav>
        </div>

    );

}
export default NavAdmin;