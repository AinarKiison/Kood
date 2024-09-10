import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://cdn.pixabay.com/photo/2016/01/05/06/35/tulip-1122031_640.jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis vero itaque architecto eligendi.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-x-twitter"></i>
                <i className="sidebarIcon fa-brands fa-x-twitter"></i>
                <i className="sidebarIcon fa-brands fa-x-twitter"></i>
            </div>
        </div>
    </div>
  )
}
