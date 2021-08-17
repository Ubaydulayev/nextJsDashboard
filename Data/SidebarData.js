import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faChartBar, faComments, faUniversity, faUser } from "@fortawesome/free-solid-svg-icons";

const SidebarData = [
    {
        title: "Home",
        href:"/",
        icon: faUniversity
    },
    {
        title: "Users",
        href:"/users",
        icon: faUser
    },
    {
        title: "Todos",
        href:"/todos",
        icon: faChartBar
    },
    {
        title: "Albums",
        href:"/albums",
        icon: faCalendarAlt
    },
    {
        title: "Photos",
        href:"/photos",
        icon: faComments
    },
    {
        title: "Posts",
        href:"/posts",
        icon: faBlogger
    },
];

export default SidebarData;