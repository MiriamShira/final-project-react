import React from 'react';
import ReactDom from 'react-dom';



export default function Navigate() {
  return (
    <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
    <h5 className='my-0 mr-md-auto font-weight-normal'>Company name</h5>
      <nav
         className='my-2 my-md-0 mr-md-3'
         aria-label='Accessibility App Main Navigation'
         role='navigation'
      >
      <ul
        id='mainnavmenu'
        role='menubar'
        aria-label='Accessibility App Main Navigation'
       className='list-unstyled d-flex flex-row mb-0'
      >
        {/* <NavItem /> */}
        <li role='none'>
     <a className='p-2 text-dark' href='#link' role='menuitem'>
       Link
     </a>
   </li>
      </ul>
    </nav>
  </div>
  );
}
