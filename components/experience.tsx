// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   const { theme}=useTheme()

//   return (
//     <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
//       <SectionHeading>My experience</SectionHeading>
//       {experiencesData.map((item, index) => (
//         <React.Fragment key={index}>
//           <h3 className="font-semibold capitalize">{item.title}</h3>
//           <p className="font-normal !mt-0">{item.location}</p>
//           <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
//         </React.Fragment>
//       ))}
//     </section>
//   );
// }
