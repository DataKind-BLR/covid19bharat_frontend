import Footer from './Footer';

import { API_DOMAIN } from '../constants';
import { fetcher } from '../utils/commonFunctions';

import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import useSWR from 'swr';

function About() {
  const { data } = useSWR(`${API_DOMAIN}/website_data.json`, fetcher, {
    suspense: true
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About - covid19india.org</title>
        <meta name='title' content='Coronavirus Outbreak in India: Latest Map and Case Count' />
      </Helmet>

      <div className='About'>
        <div className='about-title'>
          <h1>Who are we?</h1>
          <h2 className='about-body'>
            covid19bharat.org is run by{' '}
            <a href='/volunteers' target='_blank'>
              volunteers
            </a>
            , coordinated by{' '}
            <a href='https://www.datakind.org/chapters/datakind-blr' target='_blank'>
              DataKind Bangalore
            </a>
            , with additional support from{' '}
            <a href='https://devdatalab.org' target='_blank'>
              Development Data Lab
            </a>
            .
            <div className='sponsor-img-wrap'>
              <a href='https://www.datakind.org/chapters/datakind-blr' target='_blank'>
                <img
                  className='sponsor-img'
                  src='https://www.datakind.org/static/images/icons/DataKind_orange.png'></img>
              </a>
              <a href='https://www.devdatalab.org' target='_blank'>
                <img
                  className='sponsor-img'
                  src='https://shrug-assets-ddl.s3.amazonaws.com/static/main/assets/img/ddl_logo.png'></img>
              </a>
            </div>
          </h2>
          <h2>
            The motivation for this project is the amazing{' '}
            <a href='https://www.covid19india.org' target='_blank'>
              covid19india.org
            </a>
            , a volunteer-run effort that compiled essential COVID data from the early days of the
            pandemic up until October, 2021. Their herculean efforts made an enormous difference,
            and are the foundation for this site.
          </h2>
        </div>

        <div className='about-title'>
          <h1>FAQ</h1>
          {data.faq.map((faq, index) => {
            return (
              <div
                key={index}
                className='faq fadeInUp'
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <h2 className='question'>{faq.question.trim()}</h2>
                <h2 className='answer' dangerouslySetInnerHTML={{ __html: faq.answer.trim() }}></h2>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
