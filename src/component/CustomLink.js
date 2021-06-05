import { Link } from "react-router-dom";
export default function CustomLink({ to, children }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
}
