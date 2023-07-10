// import React, { useState } from 'react';

// const CollapsibleText = ({ text, maxLines = 3 }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const style = isExpanded ? {} : { 
//     display: "-webkit-box", 
//     WebkitLineClamp: maxLines, 
//     WebkitBoxOrient: "vertical", 
//     overflow: "hidden" 
//   };

//   return (
//     <p style={style}>
//       {text}
//       {text.split(' ').length > maxLines && (
//         <span onClick={() => setIsExpanded(!isExpanded)}>
//           {isExpanded ? 'Less' : 'Read more'}
//         </span>
//       )}
//     </p>
//   );
// }

// export default CollapsibleText;
