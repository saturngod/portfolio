import ExpInfo from "./experiences/exp_info";

export default function Experience() {
  return (
    <div className="pr-10 py-8 lg:py-0">
      <h2 className="text-2xl font-bold mb-2">Working Experience</h2>
      <ul>
        <li className="mb-4">
          <ExpInfo
            company="COMQUAS"
            position="Founder"
            from="Nov 2016"
            to="Present"
          ></ExpInfo>
        </li>
        <li className="mb-4">
          <ExpInfo
            company="2c2p (Singapore)"
            position="iOS Developer"
            from="Oct 2012"
            to="Sep 2016"
          ></ExpInfo>
        </li>
        <li className="mb-4">
          <ExpInfo
            company="Edenpod (Singapore)"
            position="iOS Developer"
            from="Oct 2010"
            to="Sep 2012"
          ></ExpInfo>
        </li>
        <li className="mb-4">
          <ExpInfo
            company="Point Star (Singapore)"
            position="Web Developer"
            from="Nov 2009"
            to="Sep 2010"
          ></ExpInfo>
        </li>
      </ul>
    </div>
  );
}
