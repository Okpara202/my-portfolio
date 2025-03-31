export function GlowingLogo() {
  return (
    <div className="flex flex-col items-start space-y-[1.3rem]">
      <svg
        width="165"
        height="50"
        viewBox="0 0 165 50"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-200 dark:text-blue-950"
      >
        <style>
          {`
            @keyframes glow {
              0% { text-shadow: 0 0 5px currentColor; }
              50% { text-shadow: 0 0 20px currentColor; }
              70% { text-shadow: 0 0 40px currentColor; }
              100% { text-shadow: 0 0 5px currentColor; }
            }

            .glowing {
              animation: glow 1.5s infinite alternate;
            }

          `}
        </style>

        {/* "Favour" text */}
        <text
          x="0"
          y="24"
          fontFamily="Pacifico, cursive"
          fontSize="24"
          fontWeight="bold"
          fill="currentColor"
          className="glowing"
        >
          Favour
        </text>

        {/* "Okpara" text */}
        <text
          x="0"
          y="50"
          fontFamily="Pacifico, cursive"
          fontSize="24"
          fontWeight="bold"
          fill="currentColor"
          className="glowing"
        >
          Okpara
        </text>
      </svg>
    </div>
  );
}

export function SpinningCircle() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .spinning-circle {
            animation: spin 1s linear infinite;
            transform-box: fill-box;
            transform-origin: center;
            stroke-dasharray: 8 4;
          }
        `}
      </style>

      {/* Spinning Circle */}
      <circle
        cx="10"
        cy="10"
        r="4"
        stroke="white"
        strokeWidth="2"
        fill="transparent"
        className="spinning-circle  dark:stroke-red-600"
      />
    </svg>
  );
}
