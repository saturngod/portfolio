import Skill from "./skill";

export default function DevOps() {
  return (
    <div className="pr-10">
      <h2 className="text-2xl font-bold">DevOps</h2>

      <Skill title="Cloud Platform">
        <ul>
          <li>Digital Ocean</li>
          <li>AWS</li>
        </ul>
      </Skill>

      <Skill title="Server">
        <ul>
          <li>Apache</li>
          <li>Caddy</li>
        </ul>
      </Skill>

      <Skill title="CI/CD">
        <ul>
          <li>Gitlab</li>
        </ul>
      </Skill>

      <Skill title="Other">
        <ul>
          <li>Docker</li>
          <li>Redis</li>
          <li>Kafka</li>
          <li>ELK</li>
        </ul>
      </Skill>
    </div>
  );
}
