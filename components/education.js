import Skill from "./skill";
import Experience from "./experience";

export default function Education() {
  return (
    <div className="pr-10 py-8 lg:py-0">
      <Experience />
      <h2 className="text-2xl font-bold mb-2">Education</h2>
      University Of Computer Studies <br />
      <span className="text-sm italic">2004 - 2007</span>
      <div className="pr-10 py-8 lg:py-0">
        <h2 className="text-2xl font-bold mb-2 mt-3">Certifications</h2>
        <a href="https://www.credly.com/badges/40de8fee-4c1e-4a19-a30b-b353fa55c49a?source=linked_in_profile">
          Professional Scrum Master™ I (PSM I) <br />
          <span className="text-sm italic">Issued Jun 2022</span>
        </a>
      </div>
      <div className="pr-10 py-8 lg:py-0">
        <h2 className="text-2xl font-bold mb-2 mt-3">Publications</h2>
        <ul>
          <a href="https://books.saturngod.net/programming_basic/">
            <li>Programming Basic With Python</li>
          </a>
          <a href="https://dbbasic.saturngod.net/book/">
            <li>Database Basic With MySQL</li>
          </a>
          <a href="https://devint.saturngod.net/">
            <li>Developer Intern</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
