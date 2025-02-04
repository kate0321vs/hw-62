import { NavLink, Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
     <div className='container'>
       <ul className="nav nav-tabs">
         <li className="nav-item">
           <NavLink className="nav-link" aria-current="page" to="chat">Exercise "Chat"</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="countries">Exercise "Countries"</NavLink>
         </li>
       </ul>
       <Outlet/>
     </div>
  );
};

export default Portfolio;