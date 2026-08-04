export default function Spinner () {
  return (
    <svg viewBox="0 0 100 100" className="animate-spin w-40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="42" strokeWidth="8" className="stroke-gold opacity-20" />
      <circle cx="50" cy="50" r="42" strokeWidth="8" strokeLinecap="round" strokeDasharray="198 66" className="stroke-gold" />
    </svg>
  )
}
