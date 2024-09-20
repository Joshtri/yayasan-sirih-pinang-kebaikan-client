// import React from 'react';
import ContactMain from '../../components/Contact/ContactMain';
import Layout from '../Layout';
import DescriptionContact from '../../components/Contact/DescriptionContact';

function Contact() {
  return (
    <Layout>
      {/* Home Section with animated gradient */}
      <ContactMain/>
      <DescriptionContact/>
      
    </Layout>
  )
}

export default Contact