export default function ExpInfo({ company, position, from, to }) {
  return (
    <div>
      <span className="font-medium">{company}</span>
      <span className="text-sm block">{position}</span>
      <span className="text-sm italic ">
        {from} - {to}
      </span>
    </div>
  );
}
