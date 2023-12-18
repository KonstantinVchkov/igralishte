import ContactusComponent from "@/components/Info-Components/ContactUs/ContactUs";
import { IContactPage } from "@/types/ProjectTypes";
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
  const contactRes = await axios.get("http://localhost:3001/ContactUs/ContactUs");
  return {
    props: {
      contactRes: contactRes.data,
    },
  };
};
