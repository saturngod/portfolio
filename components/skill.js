export default function Skill({ children, title }) {
  return (
    <div>
      <h3 className="text-xl mb-2 mt-3 font-light underline underline-offset-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
