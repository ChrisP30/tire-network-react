import '../styles/navbar.css'
import '../styles/navbar-medium.css'
import '../styles/navbar-small.css'
import '../styles/sidebar.css'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

function NavBar() {

    const ourShopArr = [{text: 'Our Shop', link: '/shop'}, {text: 'Location', link: '/location'}, {text: 'Customer Service', link: '/customer'}, {text: 'Reviews', link: 'https://www.google.com/localservices/prolist?g2lbs=AIQllVwENXMKjBxqfoSM8trVe7jF9c4KmjOF3DkorWv9-f_X1XQEBFI1hw5xdLO-YWMY_WNn7xvw-87bHe5_b5OP4NEtMw-TqOCJEHLSpwfa1Eqa0w-BelODgvSk0kkPibx62Vi8W1aCs_q0um2k0hw3fCzBy56O7g%3D%3D&hl=en-US&gl=us&ssta=1&oq=auto%20shops%20in%20md&src=2&serdesk=1&sa=X&scp=CgASABoAKgA%3D&spp=QiUweDg5YzgwMzY4NjQ3ZGFmMzc6MHgyOTlmZjg1MmRlZjNmOGJl&slp=MgBAAVIvCAESKRInCiUweDg5YzgwMzY4NjQ3ZGFmMzc6MHgyOTlmZjg1MmRlZjNmOGJlIACaAQYKAhcZEAA%3D&q=the%20tire%20network%201024%20S%20Hanover%20St&ved=0CAAQ0swJahgKEwiQrJjUnfqDAxUAAAAAHQAAAAAQkQE#ts=1' }]
    const servicesArr = [{text: 'Repair Services', link: '/repairs'}, {text: 'Tires', link: '/tires'}, {text: 'Guarantees', link: '/guarantees'}]
    const aboutArr = [{text: 'Our Team', link: '/team'}, {text: 'Our Story', link: '/story'}, {text: "FAQ's", link: '/faq-page'}, {text: 'Meet The Owner', link: '/owner'}]
    const contactArr = [{text: 'Contact Us', link: '/contact-us'}, {text: 'Location', link: '/location'}, {text: 'Careers', link: '/careers'}]

    const [activeItem, setActiveItem] = useState(null);

    const [hoursHovered, setHoursHovered] = useState(false)

    const [mediumNavShow, setMediumNavShow] = useState(false)

    const [mobileNavShow, setMobileNavShow] = useState(false)

    const [mobileSidebarMainItemClicked, setMobileSidebarMainItemClicked] = useState(null)

    const [mediumSidebarMainItemClicked, setMediumSidebarMainItemClicked] = useState(null)

    const hours = [
        {day: 'Monday', hours: '8:00AM to 6:00PM'},
        {day: 'Tuesday', hours: '8:00AM to 6:00PM'},
        {day: 'Wednesday', hours: '8:00AM to 6:00PM'},
        {day: 'Thursday', hours: '8:00AM to 6:00PM'},
        {day: 'Friday', hours: '8:00AM to 6:00PM'},
        {day: 'Saturday', hours: '8:00AM to 6:00PM'},
        {day: 'Sunday', hours: 'Closed'},
    ]

    const handleMobileItemClicked = (itemId) => {
        setMobileSidebarMainItemClicked(mobileSidebarMainItemClicked === itemId ? null : itemId)
    }

    const handleMediumItemClicked = (itemId) => {
        setMediumSidebarMainItemClicked(mediumSidebarMainItemClicked === itemId ? null : itemId)
    }

    const handleHoursHoverOn = () => {
        setHoursHovered(true)
    }

    const handleHoursHoverOff = () => {
        setHoursHovered(false)
    }

    const handleMouseEnter = (itemId) => {
        setActiveItem(itemId);
    };

    const handleMouseLeave = () => {
        setActiveItem(null);
    };

    const toggleMediumNav = () => {
        setMediumNavShow(!mediumNavShow)
        console.log(mediumNavShow)
    }

    const toggleMobileNav = () => {
        setMobileNavShow(!mobileNavShow)
        console.log(mobileNavShow)
    }

    const navItems = {
        'Our Shop': ourShopArr,
        'Services': servicesArr,
        'About Us': aboutArr,
        'Contact Us': contactArr
    };

    // Helper function to determine if an item is active
    const isActive = (itemId) => activeItem === itemId;

    return (
        <>
            <div className='navbar-wide-screen-container'>
                <nav className="navbar-wide-screen-top">
                    <Link to="/">
                        <div className='logo'>
                        </div>
                    </Link>
                    <div className='navbar-top-info-container'>
                        <div className='business-info-container'>
                            <ul className='business-list'>
                                <li>
                                    <a href="tel:410 244-8477">(410) 244-8477</a>
                                    <img src="images/phone.png" alt="" className='phone-text-img'/>
                                </li>
                                <li>1024 S Hanover St, Baltimore, MD 21230</li>
                            </ul>
                        </div>
                        <div className='hours-container'>
                            <ul className='hours-list'>
                                <li>Our Working Hours</li>
                                <div className='hours-list-main' onMouseEnter={handleHoursHoverOn}
                                onMouseLeave={handleHoursHoverOff}
                                >
                                    <li>8:00AM to 6:00PM</li>
                                    <img src="images/arrow-down-white.png" alt="" />
                                </div>
                                <CSSTransition
                                    in={hoursHovered} 
                                    timeout={300} 
                                    classNames="hour-transition" 
                                    unmountOnExit
                                >
                                    <ul className='show-hours-container' onMouseEnter={handleHoursHoverOn}
                                    onMouseLeave={handleHoursHoverOff}
                                    >
                                        {hours.map((hour, id) => {
                                            return <li key={id} className='hour-items'>{hour.day} :  {hour.hours}</li>
                                        })}
                                    </ul>
                                </CSSTransition>
                            </ul>
                        </div>
                    </div>

                </nav>
                <nav className='navbar-wide-screen-bottom'>
                {Object.keys(navItems).map((item, index) => (
                        <div 
                            className='nav-item-content-container'
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={handleMouseLeave}
                            key={index}
                        >
                            <div className='nav-item-content'>
                                <h3>{item}</h3>
                                <img src="images/arrow-down.png" alt="" />
                            </div>
                            <CSSTransition 
                                in={isActive(item)} 
                                timeout={300} 
                                classNames="nav-item-transition" 
                                unmountOnExit
                            >
                                <ul>
                    {navItems[item].map((subItem, id) => (
                        <li key={id}>
                            {/* Check if the link is internal or external */}
                            {subItem.link.startsWith('/') ? (
                                // Internal link, use Link component
                                <Link to={subItem.link} className='links'>
                                    {subItem.text}
                                </Link>
                            ) : (
                                // External link, use <a> tag
                                <a href={subItem.link} target="_blank" rel="noopener noreferrer" className='links'>
                                    {subItem.text}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
                            </CSSTransition>
                        </div>
                    ))}
                    <Link className='appointment-link' to={'/appointments'}>
                        <div className='nav-item-content'>
                            <h3>Appointments</h3>
                        </div>
                    </Link>
                    <div className='nav-item-content'>
                        <div className='follow-us-content'>
                            <h3>Follow Us</h3>
                            <div>
                                <a href='https://www.google.com/localservices/prolist?g2lbs=AIQllVwENXMKjBxqfoSM8trVe7jF9c4KmjOF3DkorWv9-f_X1XQEBFI1hw5xdLO-YWMY_WNn7xvw-87bHe5_b5OP4NEtMw-TqOCJEHLSpwfa1Eqa0w-BelODgvSk0kkPibx62Vi8W1aCs_q0um2k0hw3fCzBy56O7g%3D%3D&hl=en-US&gl=us&ssta=1&oq=auto%20shops%20in%20md&src=2&serdesk=1&sa=X&scp=CgASABoAKgA%3D&spp=QiUweDg5YzgwMzY4NjQ3ZGFmMzc6MHgyOTlmZjg1MmRlZjNmOGJl&slp=MgBAAVIvCAESKRInCiUweDg5YzgwMzY4NjQ3ZGFmMzc6MHgyOTlmZjg1MmRlZjNmOGJlIACaAQYKAhcZEAA%3D&q=the%20tire%20network%201024%20S%20Hanover%20St&ved=0CAAQ0swJahgKEwiQrJjUnfqDAxUAAAAAHQAAAAAQkQE#ts=1'><img src="images/Google-g-icon.png" alt="" /></a>

                                <a href="https://www.facebook.com/joe.hooe.5/"><img src="images/facebook-icon.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='navbar-medium-screen-container'>
                <nav className='navbar-medium-screen-top'>
                    <div className='logo-medium-container'>
                        <Link to='/'>
                            <div className='logo-medium'></div>
                        </Link>
                    </div>
                    <div className='business-info-medium-screen'>
                    <div className='business-info-container'>
                            <ul className='business-list'>
                                <li>
                                    <a href="tel:410 244-8477">(410) 244-8477</a>
                                    <img src="images/phone.png" alt="" className='phone-text-img'/>
                                </li>
                                <li>1024 S Hanover St, Baltimore, MD 21230</li>
                            </ul>
                        </div>
                        <div className='hours-container'>
                            <ul className='hours-list'>
                                <li>Our Working Hours</li>
                                <div className='hours-list-main' onMouseEnter={handleHoursHoverOn}
                                onMouseLeave={handleHoursHoverOff}
                                >
                                    <li>8:00AM to 6:00PM</li>
                                    <img src="images/arrow-down-white.png" alt="" />
                                </div>
                                <CSSTransition
                                    in={hoursHovered} 
                                    timeout={300} 
                                    classNames="hour-transition" 
                                    unmountOnExit
                                >
                                    <ul className='show-hours-container' onMouseEnter={handleHoursHoverOn}
                                    onMouseLeave={handleHoursHoverOff}
                                    >
                                        {hours.map((hour, id) => {
                                            return <li key={id} className='hour-items'>{hour.day} :  {hour.hours}</li>
                                        })}
                                    </ul>
                                </CSSTransition>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className='navbar-medium-screen-bottom'>
                    <div className='hamburger-medium' onClick={toggleMediumNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                <div className='contact-medium-main-container'>
                    <div className='contact-text-container-medium'>
                            <h3>Contact Us</h3>
                        </div>
                        <div className='contact-items-container-medium'>
                            <a href="tel:410 244-8477"><img src="images/phone.png" alt="" /></a>
                            <a href='https://www.google.com/localservices/prolist?g2lbs=AIQllVwENXMKjBxqfoSM8trVe7jF9c4KmjOF3DkorWv9-f_X1XQEBFI1hw5xdLO-YWMY_WNn7xvw-87bHe5_b5OP4NEtMw-TqOCJEHLSpwfa1Eqa0w-BelODgvSk0kkPibx62Vi8W1aCs_q0um2k0hw3fCzBy56O7g%3D%3D&hl=en-US&gl=us&ssta=1&oq=auto%20shops%20in%20md&src=2&serdesk=1&sa=X&scp=CgASABoAKgA%3D&spp=QiUweDg5YzgwMzY4NjQ3ZGFmMzc6MHgyOTlmZjg1MmRlZjNmOGJl&slp=MgBAAVIvCAESKRInCiUweDg5YzgwMzY4NjQ3ZGFmMzc6MHgyOTlmZjg1MmRlZjNmOGJlIACaAQYKAhcZEAA%3D&q=the%20tire%20network%201024%20S%20Hanover%20St&ved=0CAAQ0swJahgKEwiQrJjUnfqDAxUAAAAAHQAAAAAQkQE#ts=1'><img src="images/Google-g-icon.png" alt="" /></a>
                            <a href="https://www.facebook.com/joe.hooe.5/"><img src="images/facebook-icon.png" alt="" /></a>
                        </div>
                </div>
                </nav>
                <CSSTransition 
                in={mediumNavShow}
                timeout={300}
                classNames='medium-sidebar'
                unmountOnExit
                >
                    <nav className='medium-sidebar'>
                        <div className='exit-container'>
                            <h4 onClick={toggleMediumNav}>&times;</h4>
                        </div>
                        <div className='sidebar-main-container'>
                        <div className='our-shop-main-container' onClick={() => handleMediumItemClicked('ourShop')}>
                                <h2>Our Shop { mediumSidebarMainItemClicked === 'ourShop' ? '-' : '+'}</h2>
                                <CSSTransition
                                in={mediumSidebarMainItemClicked === 'ourShop'}
                                timeout={200}
                                classNames='sidebar-sub-items'
                                unmountOnExit

                                >
                                    <ul className='sidebar-sub-items'>
                                        {ourShopArr.map((item, id) => {
                                           return <Link to={item.link} key={id} className='sidebar-sub-item-link'>
                                               <li key={id} onClick={toggleMediumNav} className='sidebar-sub-item'>
                                                    {item.text}
                                                </li>
                                           </Link>
                                        })}
                                    </ul>
                                </CSSTransition>
                        </div>
                        <div className='services-main-container' onClick={() => handleMediumItemClicked('services')}>
                                <h2>Services {mediumSidebarMainItemClicked === 'services' ? '-' : '+'}</h2>
                                <CSSTransition
                                in={mediumSidebarMainItemClicked === 'services'}
                                timeout={200}
                                classNames='sidebar-sub-items'
                                unmountOnExit

                                >
                                    <ul className='sidebar-sub-items'>
                                        {servicesArr.map((item, id) => {
                                           return <Link to={item.link} key={id} className='sidebar-sub-item-link'>
                                               <li key={id} onClick={toggleMediumNav} className='sidebar-sub-item'>
                                                    {item.text}
                                                </li>
                                           </Link>
                                        })}
                                    </ul>
                                </CSSTransition>
                        </div>
                        <div className='about-main-container' onClick={() => handleMediumItemClicked('about')}>
                            <h2>About Us {mediumSidebarMainItemClicked === 'about' ? '-' : '+'}</h2>
                            <CSSTransition
                                in={mediumSidebarMainItemClicked === 'about'}
                                timeout={200}
                                classNames='sidebar-sub-items'
                                unmountOnExit

                                >
                                    <ul className='sidebar-sub-items'>
                                        {aboutArr.map((item, id) => {
                                           return <Link to={item.link} key={id} className='sidebar-sub-item-link'>
                                               <li key={id} onClick={toggleMediumNav} className='sidebar-sub-item'>
                                                    {item.text}
                                                </li>
                                           </Link>
                                        })}
                                    </ul>
                                </CSSTransition>
                        </div>
                        <div className='contact-main-container'onClick={() => handleMediumItemClicked('contact')}>
                            <h2>Contact Us {mediumSidebarMainItemClicked === 'contact' ? '-' : '+'}</h2>
                            <CSSTransition
                                in={mediumSidebarMainItemClicked === 'contact'}
                                timeout={200}
                                classNames='sidebar-sub-items'
                                unmountOnExit

                                >
                                    <ul className='sidebar-sub-items'>
                                        {contactArr.map((item, id) => {
                                           return <Link to={item.link} key={id} className='sidebar-sub-item-link'>
                                               <li key={id} onClick={toggleMediumNav} className='sidebar-sub-item'>
                                                    {item.text}
                                                </li>
                                           </Link>
                                        })}
                                    </ul>
                                </CSSTransition>
                        </div>
                        <div className='appointments-main-container'>
                            <Link to={'/appointments'} className='appointments-item-link'>
                                <h2 onClick={toggleMediumNav} className='appointments-item'>Appointments</h2>
                            </Link>
                        </div>

                        <div className='sidebar-info-container'>
                            <div className='sidebar-logo'>

                            </div>
                            <div className='sidebar-info-content'>
                            <div className='business-info-container'>
                                <ul className='business-list'>
                                    <li>
                                        <a href="tel:410 244-8477">(410) 244-8477</a>
                                        <img src="images/phone.png" alt="" className='phone-text-img'/>
                                    </li>
                                    <li>1024 S Hanover St, Baltimore, MD 21230</li>
                                </ul>
                            </div>
                            <div className='hours-container'>
                                <ul className='hours-list'>
                                    <li>Our Working Hours</li>
                                    <li>8:00AM to 6:00PM</li>
                                    <li>Monday through Saturday</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </nav>
                </CSSTransition>
            </div>
            <div className='navbar-mobile-screen-container'>
                <nav className='navbar-mobile-screen-top'>
                    <div className='logo-small-container'>
                        <Link to='/'>
                            <div className='logo-small'></div>
                        </Link>
                    </div>
                </nav>
                <nav className='navbar-mobile-screen-bottom'>
                    <div className='hamburger-mobile' onClick={toggleMobileNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                <div className='contact-mobile-main-container'>
                    <div className='contact-text-container-mobile'>
                            <h3>Contact Us</h3>
                        </div>
                        <div className='contact-items-container-mobile'>
                            <a href="tel:410 244-8477"><img src="images/phone.png" alt="" /></a>
                            <a href='https://www.google.com/localservices/prolist?g2lbs=AIQllVwENXMKjBxqfoSM8trVe7jF9c4KmjOF3DkorWv9-f_X1XQEBFI1hw5xdLO-YWMY_WNn7xvw-87bHe5_b5OP4NEtMw-TqOCJEHLSpwfa1Eqa0w-BelODgvSk0kkPibx62Vi8W1aCs_q0um2k0hw3fCzBy56O7g%3D%3D&hl=en-US&gl=us&ssta=1&oq=auto%20shops%20in%20md&src=2&serdesk=1&sa=X&scp=CgASABoAKgA%3D&spp=QiUweDg5YzgwMzY4NjQ3ZGFmMzc6MHgyOTlmZjg1MmRlZjNmOGJl&slp=MgBAAVIvCAESKRInCiUweDg5YzgwMzY4NjQ3ZGFmMzc6MHgyOTlmZjg1MmRlZjNmOGJlIACaAQYKAhcZEAA%3D&q=the%20tire%20network%201024%20S%20Hanover%20St&ved=0CAAQ0swJahgKEwiQrJjUnfqDAxUAAAAAHQAAAAAQkQE#ts=1'><img src="images/Google-g-icon.png" alt="" /></a>
                            <a href="https://www.facebook.com/joe.hooe.5/"><img src="images/facebook-icon.png" alt="" /></a>
                        </div>
                </div>
                </nav>
                <CSSTransition
                in={mobileNavShow}
                timeout={300}
                classNames='mobile-sidebar'
                unmountOnExit
                >
                <nav className='mobile-sidebar'>
                    <div className='exit-container'>
                            <h4 onClick={toggleMobileNav}>&times;</h4>
                    </div>
                    <div className='sidebar-main-container'>
                        <div className='our-shop-main-container' onClick={() => handleMobileItemClicked('ourShop')}>
                                <h2>Our Shop {mobileSidebarMainItemClicked === 'ourShop' ? '-' : '+'}</h2>
                                <CSSTransition
                                in={mobileSidebarMainItemClicked === 'ourShop'}
                                timeout={200}
                                classNames='sidebar-sub-items'
                                unmountOnExit

                                >
                                    <ul className='sidebar-sub-items'>
                                        {ourShopArr.map((item, id) => {
                                           return <Link to={item.link} key={id} className='sidebar-sub-item-link'>
                                               <li key={id} onClick={toggleMobileNav} className='sidebar-sub-item'>
                                                    {item.text}
                                                </li>
                                           </Link>
                                        })}
                                    </ul>
                                </CSSTransition>
                        </div>
                        <div className='services-main-container' onClick={() => handleMobileItemClicked('services')}>
                            <h2>Services {mobileSidebarMainItemClicked === 'services' ? '-' : '+'}</h2>
                            <CSSTransition
                                in={mobileSidebarMainItemClicked === 'services'}
                                timeout={200}
                                classNames='sidebar-sub-items'
                                unmountOnExit

                                >
                                    <ul className='sidebar-sub-items'>
                                        {servicesArr.map((item, id) => {
                                           return <Link to={item.link} key={id} className='sidebar-sub-item-link'>
                                               <li key={id} onClick={toggleMobileNav} className='sidebar-sub-item'>
                                                    {item.text}
                                                </li>
                                           </Link>
                                        })}
                                    </ul>
                                </CSSTransition>
                        </div>
                        <div className='about-main-container' onClick={() => handleMobileItemClicked('about')}>
                            <h2>About Us {mobileSidebarMainItemClicked === 'about' ? '-' : '+'}</h2>
                            <CSSTransition
                                in={mobileSidebarMainItemClicked === 'about'}
                                timeout={200}
                                classNames='sidebar-sub-items'
                                unmountOnExit

                                >
                                    <ul className='sidebar-sub-items'>
                                        {aboutArr.map((item, id) => {
                                           return <Link to={item.link} key={id} className='sidebar-sub-item-link'>
                                                <li key={id} onClick={toggleMobileNav} className='sidebar-sub-item'>
                                                    {item.text}
                                                </li>
                                           </Link>
                                        })}
                                    </ul>
                                </CSSTransition>
                        </div>
                        <div className='contact-main-container'onClick={() => handleMobileItemClicked('contact')}>
                            <h2>Contact Us {mobileSidebarMainItemClicked === 'contact' ? '-' : '+'}</h2>
                            <CSSTransition
                                in={mobileSidebarMainItemClicked === 'contact'}
                                timeout={200}
                                classNames='sidebar-sub-items'
                                unmountOnExit

                                >
                                    <ul className='sidebar-sub-items'>
                                        {contactArr.map((item, id) => {
                                           return <Link to={item.link} key={id} className='sidebar-sub-item-link'>
                                               <li key={id} onClick={toggleMobileNav} className='sidebar-sub-item'>
                                                    {item.text}
                                                </li>
                                           </Link>
                                        })}
                                    </ul>
                                </CSSTransition>
                        </div>
                        <div className='appointments-main-container'>
                            <Link to='/appointments' className='appointments-item-link'>
                                <h2 onClick={toggleMobileNav} className='appointments-item'>Appointments</h2>
                            </Link>
                        </div>
                        <div className='sidebar-info-container'>
                            <div className='sidebar-logo'>

                            </div>
                            <div className='sidebar-info-content'>
                            <div className='business-info-container'>
                                <ul className='business-list'>
                                    <li>
                                        <a href="tel:410 244-8477">(410) 244-8477</a>
                                        <img src="images/phone.png" alt="" className='phone-text-img'/>
                                    </li>
                                    <li>1024 S Hanover St, Baltimore, MD 21230</li>
                                </ul>
                            </div>
                            <div className='hours-container'>
                                <ul className='hours-list'>
                                    <li>Our Working Hours</li>
                                    <li>8:00AM to 6:00PM</li>
                                    <li>Monday through Saturday</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </nav>
                </CSSTransition>
            </div>
        </>
    )
}

export default NavBar;