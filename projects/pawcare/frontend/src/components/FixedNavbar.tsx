import Link from "next/link";
export default function FixedNavbar() {
  return (
    <div>
      <div>
        <div>PawCare</div>
        <div className="flex justify-between px-4 py-2">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Dashboard</Link>
          <Link href={"#"}>Contact</Link>
          <Link href={"#"}>About</Link>
        </div>
      </div>
    </div>
  );
}
