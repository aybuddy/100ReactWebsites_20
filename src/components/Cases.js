import React from 'react';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';

// TODO BUG Fix image upload issue

const caseStudies = [
  {
    id: 1,
    subtitle: 'Curology',
    title: "A custom formula for your skin's unique needs",
    img: 'curology-min',
    // rimg: '../assets/curology-min.png',
  },
  {
    id: 2,
    subtitle: 'Yourspace',
    title: 'Open space floor plans for your next adventure',
    img: 'yourspace-min',
    // rimg: '../assets/yourspace-min.png',
  },
  {
    id: 3,
    subtitle: 'Lumin',
    title: 'For your best look ever',
    img: 'lumin-min',
    // rimg: '../assets/lumin-min.png',
  },
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            <CasesPrev />
          </div>
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
        </div>
        <div className='row'>
          {caseStudies.map((caseItem) => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}.png`).default}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
