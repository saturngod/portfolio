import Skill from "./skill";

export default function Tech() {
  return (
    <div className="pr-10">
      <h2 className="text-2xl font-bold">Tech Stack</h2>

      <Skill title="Mobile">
        <ul>
          <li>iOS (Swift, Objective-C)</li>
          <li>Android (Kotlin)</li>
          <li>Cross Platform (Flutter)</li>
        </ul>
      </Skill>

      <Skill title="Backend">
        <ul>
          <li>PHP</li>
          <li>Laravel Framework</li>
        </ul>
      </Skill>

      <Skill title="Frontend">
        <ul>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>ReactJS</li>
        </ul>
      </Skill>

      <Skill title="Database">
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </Skill>

      <Skill title="Familiar">
        <ul>
          <li>NodeJS</li>
          <li>Python</li>
          <li>Golang</li>
        </ul>
      </Skill>
    </div>
  );
}
