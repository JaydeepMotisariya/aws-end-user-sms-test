function Icon({ size = 20, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function LogoMark() {
  return (
    <span className="logo">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="#3B82F6"
          d="M9 5.5h14a6.5 6.5 0 0 1 6.5 6.5v7.2a6.5 6.5 0 0 1-6.5 6.5h-6.2L9.2 30v-4.3H9A6.5 6.5 0 0 1 2.5 19.2v-7.2A6.5 6.5 0 0 1 9 5.5Z"
        />
        <circle cx="12" cy="15.6" r="1.45" fill="#fff" />
        <circle cx="16.4" cy="15.6" r="1.45" fill="#fff" />
        <circle cx="20.8" cy="15.6" r="1.45" fill="#fff" />
      </svg>
    </span>
  );
}

export function PlaneIcon({ size = 18 }) {
  return (
    <Icon size={size}>
      <path d="M21.5 3.5 10.8 14.2" {...stroke} />
      <path d="m21.5 3.5-6.4 17-3.7-7.4-7.4-3.7 17.5-5.9Z" {...stroke} />
    </Icon>
  );
}

export function PhoneIcon() {
  return (
    <Icon size={16}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" {...stroke} />
      <path d="M11 18.5h2" {...stroke} />
    </Icon>
  );
}

export function MessageIcon() {
  return (
    <Icon size={16}>
      <path
        d="M6 6.5h12a2 2 0 0 1 2 2v6.2a2 2 0 0 1-2 2H10l-3.5 2.6V16.7H6a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2Z"
        {...stroke}
      />
    </Icon>
  );
}

export function InfoIcon() {
  return (
    <Icon size={14}>
      <circle cx="12" cy="12" r="8" {...stroke} />
      <path d="M12 11v5" {...stroke} />
      <path d="M12 8h.01" {...stroke} />
    </Icon>
  );
}

export function AlertIcon() {
  return (
    <Icon size={18}>
      <path d="M12 4.5 3.8 19h16.4L12 4.5Z" {...stroke} />
      <path d="M12 10v4" {...stroke} />
      <path d="M12 16.5h.01" {...stroke} />
    </Icon>
  );
}

export function ChevronIcon() {
  return (
    <Icon size={14}>
      <path d="m6 9 6 6 6-6" {...stroke} />
    </Icon>
  );
}

export function CheckIcon() {
  return (
    <Icon size={16}>
      <path d="m5.5 12.5 4 4 9-9" {...stroke} strokeWidth="2.2" />
    </Icon>
  );
}

export function ChatIcon() {
  return (
    <Icon size={16}>
      <path
        d="M6.2 7h11.6a1.8 1.8 0 0 1 1.8 1.8v4.6a1.8 1.8 0 0 1-1.8 1.8h-5.2L8 18.2v-3H6.2a1.8 1.8 0 0 1-1.8-1.8V8.8A1.8 1.8 0 0 1 6.2 7Z"
        {...stroke}
        strokeWidth="1.7"
      />
      <path d="M8.5 11.2h.01M12 11.2h.01M15.5 11.2h.01" {...stroke} />
    </Icon>
  );
}

export function ShieldIcon() {
  return (
    <Icon size={16}>
      <path
        d="M12 3.8 6 6.2v5.1c0 3.2 2.4 5.4 6 6.9 3.6-1.5 6-3.7 6-6.9V6.2L12 3.8Z"
        {...stroke}
      />
    </Icon>
  );
}

export function GearIcon() {
  return (
    <Icon size={18}>
      <path
        d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        {...stroke}
      />
      <path
        d="M19.2 13.2a7.4 7.4 0 0 0 .05-2.4l1.7-1.05-1.6-2.8-1.9.55a7.6 7.6 0 0 0-2.1-1.2l-.35-2.05h-3.2l-.35 2.05a7.6 7.6 0 0 0-2.1 1.2l-1.9-.55-1.6 2.8 1.7 1.05a7.4 7.4 0 0 0 .05 2.4l-1.7 1.05 1.6 2.8 1.9-.55a7.6 7.6 0 0 0 2.1 1.2l.35 2.05h3.2l.35-2.05a7.6 7.6 0 0 0 2.1-1.2l1.9.55 1.6-2.8-1.7-1.05Z"
        {...stroke}
      />
    </Icon>
  );
}

export function PinIcon() {
  return (
    <Icon size={16}>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" {...stroke} />
      <circle cx="12" cy="11" r="1.7" {...stroke} />
    </Icon>
  );
}

export function HandsetIcon() {
  return (
    <Icon size={16}>
      <path
        d="M8 4.5h2.2l1 2.4-1.5 1a11 11 0 0 0 4.4 4.4l1-1.5 2.4 1V18a1.5 1.5 0 0 1-1.6 1.5A14.5 14.5 0 0 1 4.5 8.1 1.5 1.5 0 0 1 6 6.5h2Z"
        {...stroke}
      />
    </Icon>
  );
}

export function DocIcon() {
  return (
    <Icon size={16}>
      <path d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-8.5A1.5 1.5 0 0 1 6.5 20V5A1.5 1.5 0 0 1 8 3.5Z" {...stroke} />
      <path d="M14 3.8V8h4.2M9 13h6M9 16.5h4" {...stroke} />
    </Icon>
  );
}

export function LayersIcon() {
  return (
    <Icon size={16}>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" {...stroke} />
      <path d="m4 12 8 4 8-4" {...stroke} />
      <path d="m4 16 8 4 8-4" {...stroke} />
    </Icon>
  );
}

export function CanadaFlag() {
  return (
    <svg className="flag" viewBox="0 0 60 30" aria-hidden="true">
      <rect width="60" height="30" fill="#fff" />
      <rect width="14" height="30" fill="#D52B1E" />
      <rect x="46" width="14" height="30" fill="#D52B1E" />
      <path
        fill="#D52B1E"
        transform="translate(30 16.2) scale(0.034) translate(-256 -270)"
        d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-10.5-13.9-1.3-19.4 10.1-5.9 14.3-19.2 8.3-29.1-5.3-8.8-16.6-13.5-26.4-10.2l-27.8 9.2c-9.2 3.1-15.3-1.1-15.3-10.8 0-9.8 6.1-14.1 15.3-17.2l27.8-9.2c9.8-3.3 15.1-13.1 12.4-22.9-2.7-9.8-12.2-16.1-22.1-14.3l-29.3 5.2c-9.4 1.7-15.5-3.4-15.5-12.9 0-9.5 6.1-15.1 15.5-16.8l29.3-5.2c9.9-1.8 16.5-11.1 15.3-21-1.2-9.9-10.1-17.2-20.1-16.5l-30.3 2.1c-9.5.7-15.8-5.4-15.8-14.9V20.3c0-10.6-8.6-19.2-19.2-19.2h-22.1c-10.6 0-19.2 8.6-19.2 19.2v22.4c0 9.5-6.3 15.6-15.8 14.9l-30.3-2.1c-10-.7-18.9 6.6-20.1 16.5-1.2 9.9 5.4 19.2 15.3 21l29.3 5.2c9.4 1.7 15.5 7.3 15.5 16.8 0 9.5-6.1 14.6-15.5 12.9l-29.3-5.2c-9.9-1.8-19.4 4.5-22.1 14.3-2.7 9.8 2.6 19.6 12.4 22.9l27.8 9.2c9.2 3.1 15.3 7.4 15.3 17.2 0 9.7-6.1 13.9-15.3 10.8l-27.8-9.2c-9.8-3.3-21.1 1.4-26.4 10.2-6 9.9-1.8 23.2 8.3 29.1 9.2 5.5 8.7 14.5-1.3 19.4l-17.5 7.5s102.7 89.9 105.2 92.4c2.5 2.5 8.2 6.3 8.2 6.3l-12.6 68.2 41.5-24.8c7.7-4.6 17.3-4.6 25 0l41.5 24.8-12.6-68.2s5.7-3.8 8.2-6.3z"
      />
    </svg>
  );
}

export function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 360 230" fill="none" aria-hidden="true">
      <ellipse cx="214" cy="128" rx="118" ry="72" fill="#E7F0FF" />
      <g transform="translate(72 18) rotate(-14 66 96)">
        <rect width="124" height="190" rx="26" fill="url(#heroBack)" />
        <rect x="9" y="11" width="106" height="168" rx="18" fill="#F7FAFF" />
        <rect x="46" y="18" width="32" height="6" rx="3" fill="#D5E3F6" />
        <rect x="24" y="46" width="62" height="8" rx="4" fill="#E3EDFB" />
        <rect x="24" y="62" width="44" height="8" rx="4" fill="#EEF3FB" />
      </g>
      <g transform="translate(146 40) rotate(7 60 86)">
        <rect width="118" height="176" rx="26" fill="url(#heroFront)" />
        <rect x="8" y="9" width="102" height="158" rx="18" fill="#F8FBFF" />
        <rect x="42" y="16" width="34" height="6" rx="3" fill="#D7E5F8" />
        <rect x="20" y="40" width="54" height="9" rx="4.5" fill="#D6E4FF" />
        <rect x="20" y="56" width="38" height="8" rx="4" fill="#E7EEFF" />
        <rect x="20" y="78" width="70" height="36" rx="10" fill="#EAF1FF" />
      </g>
      <g transform="translate(214 8)">
        <rect width="96" height="58" rx="16" fill="#4C7DFF" />
        <path d="M28 58 18 76l26-18H28Z" fill="#4C7DFF" />
        <rect x="16" y="16" width="50" height="7" rx="3.5" fill="#fff" />
        <rect x="16" y="30" width="34" height="6" rx="3" fill="#fff" opacity="0.75" />
      </g>
      <g transform="translate(186 78)">
        <rect width="58" height="36" rx="12" fill="#9BB8FF" />
        <rect x="12" y="12" width="28" height="5" rx="2.5" fill="#fff" />
        <rect x="12" y="21" width="18" height="4" rx="2" fill="#fff" opacity="0.8" />
      </g>
      <path
        d="M268 92c22-18 38-16 58-36"
        stroke="#A9BFEB"
        strokeWidth="1.6"
        strokeDasharray="1.5 6"
        strokeLinecap="round"
      />
      <g transform="translate(312 18) rotate(18 16 14)">
        <path d="m2 16 30-12-10 24-4-8-8-4Z" fill="#3E73FF" />
      </g>
      <defs>
        <linearGradient id="heroBack" x1="20" y1="0" x2="110" y2="190">
          <stop stopColor="#E4EEFF" />
          <stop offset="1" stopColor="#C5D8FB" />
        </linearGradient>
        <linearGradient id="heroFront" x1="20" y1="0" x2="90" y2="180">
          <stop stopColor="#7AA6FF" />
          <stop offset="1" stopColor="#3D6CF2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SideArt() {
  return (
    <div className="side-art">
      <svg viewBox="0 0 180 150" fill="none" aria-hidden="true">
        <g transform="translate(46 18) rotate(-8 36 58)">
          <rect width="72" height="118" rx="16" fill="url(#sidePhone)" />
          <rect x="6" y="7" width="60" height="104" rx="12" fill="#F8FBFF" />
          <rect x="26" y="12" width="20" height="4" rx="2" fill="#D5E3F6" />
          <rect x="14" y="28" width="34" height="6" rx="3" fill="#D9E6FF" />
          <rect x="14" y="40" width="24" height="5" rx="2.5" fill="#E7EEFF" />
        </g>
        <g transform="translate(96 22)">
          <rect width="62" height="40" rx="12" fill="#4C7DFF" />
          <path d="M16 40 8 52l20-12H16Z" fill="#4C7DFF" />
          <rect x="12" y="12" width="30" height="5" rx="2.5" fill="#fff" />
          <rect x="12" y="22" width="20" height="4" rx="2" fill="#fff" opacity="0.75" />
        </g>
        <g transform="translate(18 78)">
          <rect width="46" height="30" rx="10" fill="#A9C2FF" />
          <rect x="10" y="10" width="22" height="4" rx="2" fill="#fff" />
        </g>
        <defs>
          <linearGradient id="sidePhone" x1="10" y1="0" x2="60" y2="120">
            <stop stopColor="#7AA6FF" />
            <stop offset="1" stopColor="#3D6CF2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
