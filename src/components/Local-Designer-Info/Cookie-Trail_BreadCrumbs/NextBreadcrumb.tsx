// 'use client'

import React from 'react'
import style from "./style.module.css"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { TBreadCrumbProps } from '@/types/GlobalTypes'
const routeNameMapping: { [key: string]: string } = {
    AboutUs: "За нас",
    ContactUs: "Контакт",
    FAQ: "Често поставувани прашања",
    local_designers:"Локални Брендови"
  };
const NextBreadcrumb = ({ separator, listClasses, activeClasses, capitalizeLinks,brandName}: TBreadCrumbProps) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )
    const getDisplayName = (pathSegment: string) => {
        const mappedName = routeNameMapping[pathSegment] || pathSegment;
        return capitalizeLinks ? mappedName[0].toUpperCase() + mappedName.slice(1) : mappedName;
    };
    return (
        <div>
            <ul className={style.containerClass}>
                <li className={listClasses}><Link href={'/'}>Почетна</Link></li>
                {pathNames.length > 0 && separator}
            {
                pathNames.map( (link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
                    let itemLink = (index === pathNames.length - 1 && brandName) ? brandName : getDisplayName(link);
                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses} >
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default NextBreadcrumb