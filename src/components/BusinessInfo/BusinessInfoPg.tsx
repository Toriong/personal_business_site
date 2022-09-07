import React from 'react';

const BusinessInfoPg = () => {
  return (
    <div style={{ height: '600px', maxWidth: '2560px' }} className='container-fluid noMargin noPadding bg-light border-bottom'>
      <section className='row noMargin pt-4 pb-4'>
        <section className='col-12 d-flex ps-2 ps-md-5'>
          <h3 className='display-4'>Business Info</h3>
        </section>
      </section>
      <section className='row noMargin pt-4'>
        <section className='col-12'>
          <h4 className='ps-0 ps-md-5'>Our Meetings</h4>
        </section>
        <section>
          <span className='ps-0 ps-md-5'>
            <a 
            className='ps-0 ps-md-4'
            href={`${window.location.origin}/Meetings.pdf`}
            target="_blank"
            rel="noreferrer"
            >
                Meetings
            </a>
          </span>
        </section>
      </section>
      <section className='row noMargin pt-4'>
        <section className='col-12'>
          <h4 className='ps-0 ps-md-5'>Contracts</h4>
        </section>
        <section>
          <span className='ps-0 ps-md-5 d-flex flex-column'>
          <a 
            className='ps-0 ps-md-4'
            href={`${window.location.origin}/InitialContract.pdf`}
            target="_blank"
            rel="noreferrer"
            >
                Initial Contract
            </a>
            <a 
            className='ps-0 ps-md-4 mt-2'
            href={`${window.location.origin}/paymentContract.pdf`}
            target="_blank"
            rel="noreferrer"
            >
                Payment Contract
            </a>
          </span>
        </section>
      </section>
    </div>
  )
}

export default BusinessInfoPg