type Props = { specs: readonly (readonly [string, string])[] }

function SpecList({ specs }: Props) {
  return (
    <dl className="spec-list">
      {specs.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export default SpecList
