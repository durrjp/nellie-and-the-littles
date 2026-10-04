import type { CSSProperties } from 'react'

// Each leaf: horizontal position (%), size (px), fall time (s), start offset (s),
// and where it rests (%) when the visitor has animations turned off.
const LEAVES = [
  { left: 4, size: 41, fall: 26, delay: -3, rest: 12 },
  { left: 13, size: 26, fall: 34, delay: -19, rest: 58 },
  { left: 22, size: 48, fall: 30, delay: -11, rest: 82 },
  { left: 31, size: 31, fall: 38, delay: -27, rest: 30 },
  { left: 41, size: 38, fall: 28, delay: -7, rest: 68 },
  { left: 50, size: 24, fall: 36, delay: -22, rest: 8 },
  { left: 59, size: 46, fall: 32, delay: -15, rest: 44 },
  { left: 68, size: 29, fall: 40, delay: -31, rest: 90 },
  { left: 77, size: 43, fall: 27, delay: -1, rest: 22 },
  { left: 86, size: 26, fall: 35, delay: -25, rest: 62 },
  { left: 94, size: 36, fall: 31, delay: -13, rest: 38 },
]

// Decorative falling leaves behind the page content. Sections with their own
// background colour cover them, so they only show on the plain cream areas.
function Leaves() {
  return (
    <div className="leaves" aria-hidden="true">
      {LEAVES.map(({ left, size, fall, delay, rest }, i) => (
        <span
          key={left}
          className="leaf"
          style={
            {
              left: `${left}%`,
              '--size': `${size}px`,
              '--fall': `${fall}s`,
              '--delay': `${delay}s`,
              '--rest': `${rest}%`,
              '--sway': `${5 + (i % 4)}s`,
            } as CSSProperties
          }
        >
          <svg viewBox="0 0 96 96" fill="none">
            <path
              d="M48 16C32 24 24 40 24 56C24 72 36 80 48 80C60 80 72 72 72 56C72 40 64 24 48 16Z"
              fill="currentColor"
              fillOpacity="0.35"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M48 24V72M48 36L36 44M48 36L60 44M48 50L34 56M48 50L62 56"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      ))}
    </div>
  )
}

export default Leaves
