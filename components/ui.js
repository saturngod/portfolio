import Skill from "./skill";

export default function UI() {
  return (
    <div className="pr-10 py-8 lg:py-0">
      <h2 className="text-2xl font-bold">UI/UX</h2>

      <Skill title="Software">
        <ul>
          <li>Sketch (Mac)</li>
          <li>Figma</li>
          <li>Penpot</li>
        </ul>
      </Skill>
    </div>
  );
}
