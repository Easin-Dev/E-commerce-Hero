import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="text-gray-600 text-sm mb-4">
      <ul className="flex space-x-2">
        {/* Home Link */}
        <li>
          <Link
            href={`/${pathSegments[0]}`}
            className="hover:underline text-gray-800"
          >
            Home
          </Link>
        </li>

        {/* Dynamic Breadcrumb Links */}
        {pathSegments.map((segment, index) => {
          const fullPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-900 font-bold capitalize">
                  {segment.replace(/-/g, " ")}
                </span>
              ) : (
                <Link
                  href={fullPath}
                  className="hover:underline text-gray-800 capitalize"
                >
                  {segment.replace(/-/g, " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
