import Skill from "./skill";
import Github from "./github";

export default function Projects({ follower }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">Projects</h2>

      <Skill title="iOS">
        <ul>
          <a href="https://apps.apple.com/us/developer/comquas-co-ltd/id374193869">
            <li>App Store</li>
          </a>
        </ul>
      </Skill>

      <Skill title="Android">
        <ul>
          <a href="https://play.google.com/store/apps/developer?id=COMQUAS&hl=en&gl=US">
            <li>Play Store</li>
          </a>
        </ul>
      </Skill>
      {follower}
      <Github follower={follower}></Github>
    </div>
  );
}
