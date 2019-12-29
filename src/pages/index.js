import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Hero from '../components/hero';
import SecondSection from '../components/secondSection';
import LocationSection from '../components/locationSection';
import Registry from '../components/registry';
import Rsvp from '../components/rsvp';

const IndexPage = () => (
  <Layout>
    <Hero />
    <SEO title="Home" />
    <SecondSection />
    <LocationSection />
    <Registry />
    <Rsvp />
  </Layout>
);

export default IndexPage;
