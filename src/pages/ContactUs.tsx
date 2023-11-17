import ContactusComponent, {
  IContactComponent,
} from "@/components/Info-Components/ContactUs/ContactUs";
import BreadCrumbs from "@/components/Local-Designer-Info/Cookie-Trail_BreadCrumbs/BreadCrumbs";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
interface IContactPage {
  contactRes: IContactComponent;
}
const ContactUs: NextPage<IContactPage> = ({ contactRes }) => {
  const router = useRouter();
  const exactRoute = router.asPath;
  return (
    <div>
      <BreadCrumbs route={exactRoute} />
      <ContactusComponent
        PageTitle={contactRes.PageTitle}
        image={contactRes.image}
        title={contactRes.title}
        subtitle={contactRes.subtitle}
        contactInfo={contactRes.contactInfo}
        number={contactRes.number}
        workTime={contactRes.workTime}
        mobNumber=""
      />
    </div>
  );
};

export default ContactUs;

export const getStaticProps: GetStaticProps = async () => {
  const contactRes = await axios.get("http://localhost:3001/ContactUs");
  return {
    props: {
      contactRes: contactRes.data,
    },
  };
};
