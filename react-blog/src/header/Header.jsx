import "./header.css"

export default function Header() {
  return (
    <div className="header"> 
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://cdn.pixabay.com/photo/2016/05/11/13/20/keyboard-1385706_1280.jpg" alt="" />
    </div>
  )
}
