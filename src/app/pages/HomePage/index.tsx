import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { FeatureImage } from './FeatureImage';
import { CourseOverview } from './CourseOverview';
import { CourseDetails } from './CourseDetails';
import { Programme } from './Programme';
import { PageWrapper } from 'app/components/PageWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="The Training Ground East London" />
      </Helmet>
      <NavBar />
      <PageWrapper className="full">
        <Masthead />
        <FeatureImage />
        <CourseOverview />
        <CourseDetails />
        <Programme />
      </PageWrapper>
    </>
  );
}
