import ContactusComponent from "@/components/Info-Components/ContactUs/ContactUs";
import { IContactPage } from "@/types/ProjectTypes";
import { CONTACTUS_API } from "@/utils/API_URLS";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import React from "react";

const ContactUs: NextPage<IContactPage> = ({ contactRes }) => {
  return (
    <div>
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
  if (typeof CONTACTUS_API === "undefined") {
    return { props: { error: "API endpoint is undefined" } };
  }
  const contactRes = await axios.get(CONTACTUS_API);
  return {
    props: {
      contactRes: contactRes.data,
    },
  };
};
