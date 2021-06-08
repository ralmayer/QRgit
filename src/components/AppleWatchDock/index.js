import * as React from "react";
import { motion, useMotionValue, AnimateSharedLayout } from "framer-motion";
import { Item } from "./Item";
import { device } from "./settings";

import ExitButton from "../ExitButton";

const iconsTable = [
  <div class="overview-icon new-bug">
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
      viewBox="-5 0 100 100"
    >
      <path
        d="M80.563,75.847c1.741-2.637,2.77-5.788,2.77-9.18C83.333,57.461,75.872,50,66.667,50c-0.18,0-0.346,0.046-0.524,0.052
	c-0.13-0.904-0.234-1.822-0.413-2.695l10.94-4.531l-2.552-6.158l-10.222,4.238c-2.236-5.938-5.7-10.775-9.896-13.867l6.002-14.486
	L53.845,10L48.04,24.011c-1.517-0.443-3.092-0.678-4.703-0.678s-3.188,0.234-4.704,0.678L32.829,10l-6.159,2.552l6.003,14.486
	c-4.199,3.092-7.66,7.93-9.896,13.867l-10.225-4.238L10,42.825l10.944,4.531c-0.391,1.928-0.681,3.92-0.824,5.977H10.003V60H20.12
	c0.144,2.058,0.434,4.05,0.824,5.977l-10.941,4.531l2.549,6.159l10.225-4.238C26.712,82.884,34.44,90,43.337,90
	c6.019,0,11.49-3.288,15.628-8.64c2.314,1.218,4.909,1.973,7.702,1.973c3.395,0,6.546-1.028,9.183-2.773L85.286,90L90,85.286
	L80.563,75.847z M43.337,30c4.346,0,8.353,2.845,11.357,7.383c-7.168,3.418-15.547,3.418-22.715,0C34.98,32.839,38.991,30,43.337,30
	z M53.841,77.188c-2.891,3.821-6.563,6.146-10.504,6.146c-9.033,0-16.667-12.213-16.667-26.666c0-4.838,0.869-9.408,2.347-13.373
	c9.037,4.369,19.597,4.375,28.643,0.007c0.947,2.539,1.608,5.345,1.986,8.301C53.962,54.251,50,59.98,50,66.667
	C50,70.677,51.478,74.31,53.841,77.188z M66.667,76.667c-5.524,0-10-4.479-10-10c0-5.527,4.476-10,10-10c5.523,0,10,4.473,10,10
	C76.667,72.188,72.19,76.667,66.667,76.667z"
      />
    </svg>
  </div>,
  <div class="overview-icon new-help-wanted">
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
    >
      <path
        d="M76.667,9.999H23.333c-3.667,0-6.667,3-6.667,6.667v30c0,3.667,3,6.667,6.667,6.667h20L50,59.999l6.667-6.667h20
	c3.665,0,6.666-3,6.666-6.667v-30C83.333,12.999,80.332,9.999,76.667,9.999z M76.667,46.666H53.906L50,50.57l-3.906-3.905h-22.76
	v-30h53.333V46.666z"
      />
      <polygon points="50.107,39.999 44.889,39.999 49.89,23.332 55.11,23.332 " />
      <path
        d="M36.952,23.332l-5.98,5.977c-1.295,1.296-1.295,3.418,0,4.714l5.98,5.977l3.535-3.535l-4.798-4.798l4.798-4.798
	L36.952,23.332z"
      />
      <path
        d="M63.054,39.999l5.977-5.977c1.295-1.296,1.295-3.418,0-4.714l-5.977-5.977l-3.535,3.535l4.798,4.798l-4.798,4.798
	L63.054,39.999z"
      />
      <path
        d="M56.667,73.332c0,3.682-2.985,6.667-6.667,6.667c-3.678,0-6.667-2.985-6.667-6.667s2.988-6.666,6.667-6.666
	C53.682,66.666,56.667,69.65,56.667,73.332z"
      />
      <path d="M63.333,89.999c0-3.682-2.984-6.667-6.666-6.667l-13.333,0.004c-3.682,0-6.667,2.984-6.667,6.666L63.333,89.999z" />
      <path
        d="M83.333,73.332c0,3.682-2.984,6.667-6.666,6.667c-3.679,0-6.667-2.985-6.667-6.667s2.988-6.666,6.667-6.666
	C80.349,66.666,83.333,69.65,83.333,73.332z"
      />
      <path d="M90,89.999c0-3.682-2.985-6.667-6.667-6.667L70,83.336v6.666L90,89.999z" />
      <path
        d="M16.667,73.332c0,3.682,2.985,6.667,6.667,6.667c3.678,0,6.667-2.985,6.667-6.667s-2.988-6.666-6.667-6.666
	C19.652,66.666,16.667,69.65,16.667,73.332z"
      />
      <path d="M10,89.999c0-3.682,2.985-6.667,6.667-6.667L30,83.336v6.666L10,89.999z" />
    </svg>
  </div>,
  <div class="overview-icon new-legacy-fix">
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
    >
      <polygon points="66.667,36.667 61.953,41.38 70.573,50 61.95,58.62 66.663,63.333 80,50 " />
      <polygon points="33.333,63.333 38.047,58.62 29.427,50 38.05,41.38 33.337,36.667 20,50 " />
      <rect
        x="19.835"
        y="46.667"
        transform="matrix(-0.2588 0.9659 -0.9659 -0.2588 111.2357 14.6421)"
        width="60.33"
        height="6.666"
      />
    </svg>
  </div>,
  <div class="overview-icon new-documentation">
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
    >
      <path
        d="M83.333,13.333H16.667C13.001,13.333,10,16.331,10,20v60c0,3.665,3.001,6.667,6.667,6.667h66.666
	C86.999,86.667,90,83.665,90,80V20C90,16.331,86.999,13.333,83.333,13.333z M83.333,80H16.667V20h66.666V80z"
      />
      <rect x="23.333" y="26.667" width="6.667" height="6.666" />
      <rect x="36.667" y="26.667" width="20" height="6.666" />
      <rect x="23.333" y="40" width="6.667" height="6.667" />
      <rect x="36.667" y="40" width="40" height="6.667" />
      <rect x="23.333" y="53.333" width="6.667" height="6.667" />
      <rect x="36.667" y="53.333" width="26.666" height="6.667" />
      <rect x="23.333" y="66.667" width="6.667" height="6.666" />
      <rect x="36.667" y="66.667" width="33.333" height="6.666" />
    </svg>
  </div>,
  <div class="overview-icon new-suggestion">
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
    >
      <polygon points="62.57,36.667 57.421,36.667 64.088,10.001 69.244,10.001 " />
      <path
        d="M78.053,10.001l10.976,10.977c1.296,1.295,1.296,3.417,0,4.713L78.053,36.667l-3.535-3.535l9.798-9.798l-9.798-9.798
	L78.053,10.001z"
      />
      <path
        d="M48.609,36.667L37.633,25.691c-1.296-1.296-1.296-3.418,0-4.713l10.976-10.977l3.535,3.535l-9.798,9.798l9.798,9.798
	L48.609,36.667z"
      />
      <path
        d="M76.666,63.332H49.999c0-7.363-5.97-13.332-13.333-13.332h-20v-6.667H10v46.664h6.667v-4.297l13.531,3.379
	c3.558,0.893,9.437,1.186,13.063,0.658l42.62-6.914c0.817-0.339,1.55-0.827,2.165-1.445c1.207-1.205,1.953-2.871,1.953-4.714
	C89.999,69.302,84.028,63.332,76.666,63.332z M42.304,83.143c-2.77,0.41-7.77,0.15-10.491-0.527l-15.146-3.789v-22.16h20
	c3.675,0,6.667,2.994,6.667,6.666H30v6.667h46.666c3.612,0,6.549,2.896,6.646,6.49L42.304,83.143z"
      />
    </svg>
  </div>,
  <div class="overview-icon new-hotfix">
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
    >
      <path d="M90,40H70V10L36.667,60h20v30L90,40z M49.121,53.333l14.212-21.315v14.649h14.209L63.333,67.981V53.333H49.121z" />
      <rect x="10" y="53.333" width="20" height="6.667" />
      <rect x="16.667" y="40" width="23.333" height="6.667" />
      <rect x="30" y="26.667" width="16.667" height="6.667" />
      <rect x="16.667" y="66.667" width="33.333" height="6.666" />
    </svg>
  </div>,
];

const eventsTable = [
  <h2 class="device-event">
    a new <span>Bug</span>
    <br /> has been reported
  </h2>,
  <h2 class="device-event">
    a new <span>Help Request</span> <br />
    has been opened
  </h2>,
  <h2 class="device-event">
    a new <span>Legacy Fix</span> <br />
    has been posted
  </h2>,
  <h2 class="device-event">
    a new <span>Documentation</span> <br />
    entry has been added
  </h2>,
  <h2 class="device-event">
    a new <span>Suggestion</span> <br />
    has been offered
  </h2>,
  <h2 class="device-event">
    a new <span>Hotfix</span> <br />
    has been proposed
  </h2>,
];

const colors = [
  "#F8DA30",
  "#7630F8",
  "#F7304D",
  "#F85530",
  "#30F8DA",
  "#3091F8",
];

const grid = new Array(10).fill([0, 1, 2, 3, 4, 5, 6, 7]);

export function AppleWatchDock() {
  const [dragState, setDrag] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState();
  const x = useMotionValue(-225);
  const y = useMotionValue(-225);

  return (
    <div className="device" style={device}>
      <motion.div
        drag
        dragConstraints={{ left: -650, right: 50, top: -600, bottom: 50 }}
        style={{
          width: 1000,
          height: 1000,

          x,
          y,
          background: "transparent",
        }}
      >
        {grid.map((rows, rowIndex) =>
          rows.map((colIndex) => (
            <Item
              setActiveItem={setActiveItem}
              colors={colors}
              icons={iconsTable}
              setDrag={setDrag}
              row={rowIndex}
              col={colIndex}
              planeX={x}
              planeY={y}
            />
          ))
        )}
      </motion.div>
      <div class="device-modal" data-isactive={!dragState}>
        <ExitButton setClicked={setDrag} />
        {iconsTable[activeItem]}
        {eventsTable[activeItem]}
        <div class="view-on-gh-btn disabled">
          <p>
            View on GitHub{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                class="action-icon"
              >
                <path d="M64 48.422V4.427c0-2.67-1.686-4.45-4.404-4.45L15.601.07c-2.622 0-4.31 1.921-4.31 4.124 0 2.202 1.921 4.075 4.123 4.075H29.33l22.302-.842-8.482 7.496L1.312 56.855C.468 57.698 0 58.73 0 59.713c0 2.202 1.968 4.31 4.264 4.31 1.077 0 2.061-.421 2.904-1.265l41.886-41.933 7.543-8.48-.89 21.318v14.946c0 2.155 1.874 4.123 4.17 4.123 2.202 0 4.123-1.827 4.123-4.31z"></path>
              </svg>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}