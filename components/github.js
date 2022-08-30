import Skill from "./skill";

export default function Github({ follower }) {
  return (
    <div>
      <Skill title="Github">
        <ul>
          <a href="https://github.com/saturngod">
            <li>{follower} followers</li>
          </a>
        </ul>
      </Skill>
    </div>
  );
}
