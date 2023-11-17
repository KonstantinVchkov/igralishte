import BreadCrumbs from '@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/BreadCrumbs';
import Local_Designer from '@/components/Local-Designer-Info/LocalDesigner/Local_Designer';
import { NextPage } from 'next'
import { useRouter } from 'next/router';
import React from 'react'

const LocalDesigner:NextPage = () => {
  const asPathRoute = useRouter();
  const exactRoute = asPathRoute.pathname;
  return (
    <div>
      <BreadCrumbs route={exactRoute} />
      <Local_Designer/>
    </div>
  )
}

export default LocalDesigner