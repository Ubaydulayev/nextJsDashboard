import Link from "next/dist/client/link";
import SidebarData from "../Data/SidebarData";
import { useRouter } from "next/dist/client/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="sidebar">
      <div className="d-flex justify-content-center mb-3">
        <h1 className="h5 text-light m-0">Menu</h1>
      </div>
      <ul>
        {SidebarData.map((v) => (
          <li className={`${router.pathname === v.href && "active"}`}>
            <Link href={v.href}>
              <a
                className={`sidebar_link mb-3 shadow ${
                  router.pathname === v.href ? "text-dark" : "text-light"
                } `}
              >
                <FontAwesomeIcon icon={v.icon} className="font_icon" />{" "}
                {v.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
