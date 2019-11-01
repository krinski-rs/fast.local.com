import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './style.css';
import './reset.css';
import icon_32_computer from './assets/images/icons/icon_32_computer.png';
import icon_32_drive from './assets/images/icons/icon_32_drive.png';
import icon_32_disc from './assets/images/icons/icon_32_disc.png';
import icon_32_network from './assets/images/icons/icon_32_network.png';




class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className="abs" id="wrapper">
                    <div className="abs" id="desktop">
                        <a className="abs icon" style={{ left: "20px", top: "20px" }} href="#icon_dock_computer">
                            <img src={icon_32_computer} alt="" />
                            Computer
                        </a>
                        <a className="abs icon" style={{ left: "20px", top: "100px" }} href="#icon_dock_drive">
                            <img src={icon_32_drive} alt="" />
                            Hard Drive
                        </a>
                        <a className="abs icon" style={{ left: "20px", top: "180px" }} href="#icon_dock_disc">
                            <img src={icon_32_disc} alt="" />
                            Audio CD
                        </a>
                        <a className="abs icon" style={{ left: "20px", top: "260px" }} href="#icon_dock_network">
                            <img src={icon_32_network} alt="" />
                            Network
                        </a>
                        <div id="window_computer" className="abs window">
                            <div className="abs window_inner">
                                <div className="window_top">
                                    <span className="float_left">
                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                        Computer
                                    </span>
                                    <span className="float_right">
                                        <a href="#" className="window_min"></a>
                                        <a href="#" className="window_resize"></a>
                                        <a href="#icon_dock_computer" className="window_close"></a>
                                    </span>
                                </div>
                                <div className="abs window_content">
                                    <div className="window_aside">
                                        Hello. You look nice today!
                                    </div>
                                    <div className="window_main">
                                        <table className="data">
                                            <thead>
                                                <tr>
                                                    <th className="shrink">&nbsp;</th>
                                                    <th>Name</th>
                                                    <th>Date Modified</th>
                                                    <th>Date Created</th>
                                                    <th>Size</th>
                                                    <th>Kind</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>    <img src="assets/images/icons/icon_16_drive.png" alt="" />
                                                    </td>
                                                    <td>Hard Drive</td>
                                                    <td>Today</td>
                                                    <td>&mdash;</td>
                                                    <td>200 GB</td>
                                                    <td>Volume</td>
                                                </tr>
                                                <tr>
                                                    <td>    <img src="assets/images/icons/icon_16_disc.png" alt="" />
                                                    </td>
                                                    <td>Audio CD</td>
                                                    <td>&mdash;</td>
                                                    <td>&mdash;</td>
                                                    <td>2.92 GB</td>
                                                    <td>Media</td>
                                                </tr>
                                                <tr>
                                                    <td>    <img src="assets/images/icons/icon_16_network.png" alt="" />
                                                    </td>
                                                    <td>Network</td>
                                                    <td>&mdash;</td>
                                                    <td>&mdash;</td>
                                                    <td>&mdash;</td>
                                                    <td>LAN</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_folder_remote.png" alt="" />
                                                    </td>
                                                    <td>Shared Project Files</td>
                                                    <td>Yesterday</td>
                                                    <td>12/29/08</td>
                                                    <td>524 MB</td>
                                                    <td>Folder</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_documents.png" alt="" />
                                                    </td>
                                                    <td>Documents</td>
                                                    <td>Yesterday</td>
                                                    <td>12/29/08</td>
                                                    <td>524 MB</td>
                                                    <td>Folder</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_system.png" alt="" />
                                                    </td>
                                                    <td>Preferences</td>
                                                    <td>&mdash;</td>
                                                    <td>&mdash;</td>
                                                    <td>&mdash;</td>
                                                    <td>System</td>
                                                </tr>
                                                <tr>
                                                    <td>    <img src="assets/images/icons/icon_16_trash.png" alt="" />
                                                    </td>
                                                    <td>Trash</td>
                                                    <td>Today</td>
                                                    <td>&mdash;</td>
                                                    <td>&mdash;</td>
                                                    <td>Bin</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="abs window_bottom">Build: TK421</div>
                            </div>
                            <span className="abs ui-resizable-handle ui-resizable-se"></span>
                        </div>
                        <div id="window_drive" className="abs window">
                            <div className="abs window_inner">
                                <div className="window_top">
                                    <span className="float_left">
                                        <img src="assets/images/icons/icon_16_drive.png" alt="" />
                                        Hard Drive
                                </span>
                                    <span className="float_right">
                                        <a href="#" className="window_min"></a>
                                        <a href="#" className="window_resize"></a>
                                        <a href="#icon_dock_drive" className="window_close"></a>
                                    </span>
                                </div>
                                <div className="abs window_content">
                                    <div className="window_aside">
                                        Storage in use: 119.1 GB
                                    </div>
                                    <div className="window_main">
                                        <table className="data">
                                            <thead>
                                                <tr>
                                                    <th className="shrink">&nbsp;</th>
                                                    <th>Name</th>
                                                    <th>Date Modified</th>
                                                    <th>Date Created</th>
                                                    <th>Size</th>
                                                    <th>Kind</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_page.png" alt="" />
                                                    </td>
                                                    <td>.DS_Store</td>
                                                    <td>Yesterday</td>
                                                    <td>&mdash;</td>
                                                    <td>6 KB</td>
                                                    <td>Hidden</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_folder_home.png" alt="" />
                                                    </td>
                                                    <td>Default User</td>
                                                    <td>Today</td>
                                                    <td>&mdash;</td>
                                                    <td>&mdash;</td>
                                                    <td>Folder</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_folder.png" alt="" />
                                                    </td>
                                                    <td>Applications</td>
                                                    <td>Yesterday</td>
                                                    <td>&mdash;</td>
                                                    <td>&mdash;</td>
                                                    <td>Folder</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_folder.png" alt="" />
                                                    </td>
                                                    <td>Developer</td>
                                                    <td>12/29/08</td>
                                                    <td>&mdash;</td>
                                                    <td>&mdash;</td>
                                                    <td>Folder</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_folder.png" alt="" />
                                                    </td>
                                                    <td>Library</td>
                                                    <td>09/11/09</td>
                                                    <td>&mdash;</td>
                                                    <td>&mdash;</td>
                                                    <td>Folder</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_folder.png" alt="" />
                                                    </td>
                                                    <td>System</td>
                                                    <td>Yesterday</td>
                                                    <td>&mdash;</td>
                                                    <td>&mdash;</td>
                                                    <td>Folder</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="abs window_bottom">
                                    Free: 80.9 GB
                                </div>
                            </div>
                            <span className="abs ui-resizable-handle ui-resizable-se"></span>
                        </div>
                        <div id="window_disc" className="abs window">
                            <div className="abs window_inner">
                                <div className="window_top">
                                    <span className="float_left">
                                        <img src="assets/images/icons/icon_16_disc.png" alt="" />
                                        Audio CD - Title of Album
                                    </span>
                                    <span className="float_right">
                                        <a href="#" className="window_min"></a>
                                        <a href="#" className="window_resize"></a>
                                        <a href="#icon_dock_disc" className="window_close"></a>
                                    </span>
                                </div>
                                <div className="abs window_content">
                                    <div className="window_aside align_center">
                                        <img src="assets/images/misc/album_cover.jpg" alt="" />
                                        <br />
                                        <em>Title of Album</em>
                                    </div>
                                    <div className="window_main">
                                        <table className="data">
                                            <thead>
                                                <tr>
                                                    <th className="shrink">&nbsp;</th>
                                                    <th className="shrink">Track</th>
                                                    <th>Song Name</th>
                                                    <th className="shrink">Length</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">01</td>
                                                    <td>Track One</td>
                                                    <td className="align_right">3:50</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">02</td>
                                                    <td>Track Two</td>
                                                    <td className="align_right">3:50</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">
                                                        03</td>
                                                    <td>Track Three</td>
                                                    <td className="align_right">4:02</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">
                                                        04</td>
                                                    <td>Track Four</td>
                                                    <td className="align_right">3:47</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">
                                                        05</td>
                                                    <td>Track Five</td>
                                                    <td className="align_right">4:38</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">
                                                        06</td>
                                                    <td>Track Six</td>
                                                    <td className="align_right">3:16</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">07</td>
                                                    <td>Track Seven</td>
                                                    <td className="align_right">3:53</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">08</td>
                                                    <td>Track Eight</td>
                                                    <td className="align_right">1:41</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">09</td>
                                                    <td>Track Nine</td>
                                                    <td className="align_right">3:40</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">10</td>
                                                    <td>Track Ten</td>
                                                    <td className="align_right">4:33</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">11</td>
                                                    <td>Track Eleven</td>
                                                    <td className="align_right">3:49</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">12</td>
                                                    <td>Track Twelve</td>
                                                    <td className="align_right">1:11</td>
                                                </tr>
                                                <tr>
                                                    <td className="shrink">
                                                        <img src="assets/images/icons/icon_16_music.png" alt="" />
                                                    </td>
                                                    <td className="align_center">13</td>
                                                    <td>Track Thirteen</td>
                                                    <td className="align_right">6:17</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="abs window_bottom">
                                    Genre: Rock/Rap
                                </div>
                            </div>
                            <span className="abs ui-resizable-handle ui-resizable-se"></span>
                        </div>
                        <div id="window_network" className="abs window">
                            <div className="abs window_inner">
                                <div className="window_top">
                                    <span className="float_left">
                                        <img src="assets/images/icons/icon_16_network.png" alt="" />
                                        Network
                                    </span>
                                    <span className="float_right">
                                        <a href="#" className="window_min"></a>
                                        <a href="#" className="window_resize"></a>
                                        <a href="#icon_dock_network" className="window_close"></a>
                                    </span>
                                </div>
                                <div className="abs window_content">
                                    <div className="window_aside">
                                        Local Network Resources
                                    </div>
                                    <div className="window_main">
                                        <table className="data">
                                            <thead>
                                                <tr>
                                                    <th className="shrink">&nbsp;</th>
                                                    <th>Name</th>
                                                    <th className="shrink">Operating System</th>
                                                    <th className="shrink">Version</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_server.png" alt="" />
                                                    </td>
                                                    <td>Urban Terror - <em>Game Server</em>
                                                    </td>
                                                    <td>Linux</td>
                                                    <td>Ubuntu</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_folder_remote.png" alt="" />
                                                    </td>
                                                    <td>Shared Project Files</td>
                                                    <td>Linux</td>
                                                    <td>Red Hat</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_vpn.png" alt="" />
                                                    </td>
                                                    <td>Remote Desktop VPN</td>
                                                    <td>Windows</td>
                                                    <td>XP</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Michael Scott</td>
                                                    <td>Mac OS</td>
                                                    <td>10.5</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Dwight Schrute</td>
                                                    <td>Mac OS</td>
                                                    <td>10.6</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Jim Halpert</td>
                                                    <td>Mac OS</td>
                                                    <td>10.6</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Pam Beesly</td>
                                                    <td>Mac OS</td>
                                                    <td>10.5</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Ryan Howard</td>
                                                    <td>Mac OS</td>
                                                    <td>10.5</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Jan Levinson</td>
                                                    <td>Mac OS</td>
                                                    <td>10.5</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Roy Anderson</td>
                                                    <td>Windows</td>
                                                    <td>7</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Stanley Hudson</td>
                                                    <td>Windows</td>
                                                    <td>Vista</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Kevin Malone</td>
                                                    <td>Windows</td>
                                                    <td>Vista</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Angela Martin</td>
                                                    <td>Windows</td>
                                                    <td>Vista</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Oscar Martinez</td>
                                                    <td>Windows</td>
                                                    <td>Vista</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Phyllis Lapin</td>
                                                    <td>Windows</td>
                                                    <td>Vista</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Creed Bratton</td>
                                                    <td>Windows</td>
                                                    <td>7</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Meredith Palmer</td>
                                                    <td>Windows</td>
                                                    <td>Vista</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Toby Flenderson</td>
                                                    <td>Windows</td>
                                                    <td>Vista</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Darryl Philbin</td>
                                                    <td>Windows</td>
                                                    <td>Vista</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Kelly Kapoor</td>
                                                    <td>Windows</td>
                                                    <td>Vista</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/icons/icon_16_computer.png" alt="" />
                                                    </td>
                                                    <td>Andy Bernard</td>
                                                    <td>Windows</td>
                                                    <td>Vista</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="abs window_bottom">
                                    LAN: Corporate Intranet
                                </div>
                            </div>
                            <span className="abs ui-resizable-handle ui-resizable-se"></span>
                        </div>
                    </div>
                    <div className="abs" id="bar_top">
                        <span className="float_right" id="clock"></span>
                        <ul>
                            <li>
                                <a className="menu_trigger" href="#">Home</a>
                                <ul className="menu">
                                    <li>
                                        <a href="http://www.amazon.com/dp/0596159773?tag=sons-20">jQuery Cookbook</a>
                                    </li>
                                    <li>
                                        <a href="http://jqueryenlightenment.com/">jQuery Enlightenment</a>
                                    </li>
                                    <li>
                                        <a href="http://jquery.com/">jQuery Home</a>
                                    </li>
                                    <li>
                                        <a href="http://jquerymobile.com/">jQuery Mobile</a>
                                    </li>
                                    <li>
                                        <a href="http://jqueryui.com/">jQuery UI</a>
                                    </li>
                                    <li>
                                        <a href="http://learningjquery.com/">Learning jQuery</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="menu_trigger" href="#">HTML5 Resources</a>
                                <ul className="menu">
                                    <li>
                                        <a href="http://diveintohtml5.info/">Dive Into HTML5</a>
                                    </li>
                                    <li>
                                        <a href="http://www.alistapart.com/articles/get-ready-for-html-5/">Get Ready for HTML5</a>
                                    </li>
                                    <li>
                                        <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a>
                                    </li>
                                    <li>
                                        <a href="http://html5doctor.com/">HTML5 Doctor</a>
                                    </li>
                                    <li>
                                        <a href="http://html5.org/">HTML5 Intro</a>
                                    </li>
                                    <li>
                                        <a href="http://www.zeldman.com/superfriends/">HTML5 Super Friends</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="menu_trigger" href="#">Code</a>
                                <ul className="menu">
                                    <li>
                                        <a href="assets/css/desktop.css">Desktop - CSS</a>
                                    </li>
                                    <li>
                                        <a href="assets/js/jquery.desktop.js">Desktop - JavaScript</a>
                                    </li>
                                    <li>
                                        <a href="http://github.com/nathansmith/jQuery-Desktop">GitHub Repository</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="menu_trigger" href="#">Credits</a>
                                <ul className="menu">
                                    <li>
                                        <a href="http://sonspring.com/journal/jquery-desktop">Demo built by Nathan Smith</a>
                                    </li>
                                    <li>
                                        <a href="http://twitter.com/adrianrodriguez/">Wallpaper by Adrian Rodriguez</a>
                                    </li>
                                    <li>
                                        <a href="http://tango.freedesktop.org/Tango_Desktop_Project">Icons - Tango Desktop Project</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="abs" id="bar_bottom">
                        <a className="float_left" href="#" id="show_desktop" title="Show Desktop">
                            <img src="assets/images/icons/icon_22_desktop.png" />
                        </a>
                        <ul id="dock">
                            <li id="icon_dock_computer">
                                <a href="#window_computer">
                                    <img src="assets/images/icons/icon_22_computer.png" alt="" />
                                    Computer
                                </a>
                            </li>
                            <li id="icon_dock_drive">
                                <a href="#window_drive">
                                    <img src="assets/images/icons/icon_22_drive.png" alt="" />
                                    Hard Drive
                                </a>
                            </li>
                            <li id="icon_dock_disc">
                                <a href="#window_disc">
                                    <img src="assets/images/icons/icon_22_disc.png" alt="" />
                                    Audio CD
                                </a>
                            </li>
                            <li id="icon_dock_network">
                                <a href="#window_network">
                                    <img src="assets/images/icons/icon_22_network.png" alt="" />
                                    Network
                                </a>
                            </li>
                        </ul>
                    </div>
                </ div>
            </React.Fragment>

        );
    }
}
export default App;
