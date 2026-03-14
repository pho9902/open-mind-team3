export const MenuIcon = ({ size = 24, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 7V2.5C2 2.22386 2.22386 2 2.5 2H7C7.27614 2 7.5 2.22386 7.5 2.5V7C7.5 7.27614 7.27614 7.5 7 7.5H2.5C2.22386 7.5 2 7.27614 2 7Z"
      stroke="black"
      stroke-width="1.5"
      class="svg-elem-1"
      fill={color || "currentColor"}
    />
    <path
      d="M9.5 7V2.5C9.5 2.22386 9.72386 2 10 2H14.5C14.7761 2 15 2.22386 15 2.5V7C15 7.27614 14.7761 7.5 14.5 7.5H10C9.72386 7.5 9.5 7.27614 9.5 7Z"
      stroke="black"
      stroke-width="1.5"
      class="svg-elem-2"
      fill={color || "currentColor"}
    />
    <path
      d="M9.5 14.7273V10.2273C9.5 9.95115 9.72386 9.72729 10 9.72729H14.5C14.7761 9.72729 15 9.95115 15 10.2273V14.7273C15 15.0034 14.7761 15.2273 14.5 15.2273H10C9.72386 15.2273 9.5 15.0034 9.5 14.7273Z"
      stroke="black"
      stroke-width="1.5"
      class="svg-elem-3"
      fill={color || "currentColor"}
    />
    <path
      d="M2 14.7273V10.2273C2 9.95115 2.22386 9.72729 2.5 9.72729H7C7.27614 9.72729 7.5 9.95115 7.5 10.2273V14.7273C7.5 15.0034 7.27614 15.2273 7 15.2273H2.5C2.22386 15.2273 2 15.0034 2 14.7273Z"
      stroke="black"
      stroke-width="1.5"
      class="svg-elem-4"
      fill={color || "currentColor"}
    />
  </svg>
);
