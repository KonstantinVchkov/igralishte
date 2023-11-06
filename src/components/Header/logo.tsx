import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoComponent = () => {
  return (
    <Link href="/">
    <div className="logo">
    <Image src={'/images/logo.png'} alt="logo-Igralishte" width={150} height={30} priority />
  </div>
  </Link>
  )
};

export default LogoComponent;
