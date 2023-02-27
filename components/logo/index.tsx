import Link from "next/link";

export const CompanyLogo = () => {
  return (
    <Link href="/">
      <span className="sr-only">Your Company</span>
      <img
        className="h-8 w-auto sm:h-10"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="logo-company"
      />
    </Link>
  );
};
