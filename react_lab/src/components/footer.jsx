// import React from 'react'

// export default function footer() {
//   return (
//     <>
//       <footer>
//         <p>© 2025 Your Company</p>
//         <p>Follow us on social media</p>
//       </footer>
//     </>
//   )
// }

import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} SmartCare. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
