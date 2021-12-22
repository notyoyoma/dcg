<template>
  <div id="loading">
    <svg viewBox="0 0 100 300">
      <defs>
        <clipPath id="clipStairs" clipPathUnits="userSpaceOnUse">
          <rect x="0" y="175" width="100" height="125" />
        </clipPath>
        <radialGradient id="halo">
          <stop offset="0%" stop-color="#cb8e5d" />
          <stop offset="80%" stop-color="#000" />
        </radialGradient>
      </defs>
      <circle class="halo" cx="70" cy="70" r="310" fill="url(#halo)" />
      <!-- <circle cx="50" cy="150" r="200" fill="#fff" /> -->
      <g class="flame">
        <g class="sparks">
          <circle class="spark_1" fill="white" cx="5" cy="20" r="1" />
          <circle class="spark_2" fill="white" cx="8" cy="15" r="1" />
          <circle class="spark_3" fill="white" cx="10" cy="15" r="1" />
          <circle class="spark_4" fill="white" cx="12" cy="15" r="1" />
          <circle class="spark_5" fill="white" cx="15" cy="20" r="1" />
        </g>
        <path
          class="outerFlame"
          width="16"
          height="22"
          x="50"
          y="30"
          d="M 6.32,4.41
             C 7.84,1.57 8.59,0.15 9.77,0.14
             10.95,0.12 11.74,1.52 13.32,4.32
             13.32,4.32 18.36,13.23 18.36,13.23
             18.40,13.30 18.42,13.33 18.44,13.38
             18.47,13.43 18.48,13.45 18.50,13.50
             18.94,14.51 21.47,20.81 18.44,25.18
             15.13,29.94 4.61,30.32 1.55,25.18
             -1.28,20.43 1.13,14.35 1.50,13.47
             1.52,13.44 1.53,13.42 1.54,13.38
             1.56,13.34 1.58,13.31 1.61,13.26
             1.61,13.26 6.32,4.41 6.32,4.41 Z"
        />
        <path
          class="innerFlame"
          width="10"
          height="12"
          x="50"
          y="36"
          d="M 6.48,14.60
             C 7.97,12.12 8.72,10.87 9.83,10.86
             10.93,10.85 11.71,12.07 13.27,14.51
             13.27,14.51 15.22,17.58 15.22,17.58
             15.26,17.65 15.29,17.68 15.32,17.74
             15.35,17.79 15.36,17.82 15.38,17.86
             15.73,18.60 17.17,21.99 15.31,24.37
             13.21,27.05 6.55,27.26 4.61,24.37
             2.88,21.78 4.25,18.49 4.56,17.83
             4.57,17.80 4.58,17.78 4.61,17.73
             4.63,17.69 4.65,17.66 4.68,17.61
             4.68,17.61 6.48,14.60 6.48,14.60 Z"
          fill="#333"
        />
      </g>
      <g clip-path="url(#clipStairs)" x="0" y="200" width="100" height="100">
        <g class="stairs">
          <rect fill="#000" height="26" width="25" x="0" y="200" />
          <rect fill="#000" height="26" width="50" x="0" y="225" />
          <rect fill="#000" height="26" width="75" x="0" y="250" />
          <rect fill="#000" height="26" width="100" x="0" y="275" />
          <rect fill="#000" height="26" width="125" x="0" y="300" />
        </g>
      </g>
      <g class="head-torso">
        <!-- head -->
        <circle fill="black" cx="40" cy="120" r="15">
          <animate
            attributeName="cx"
            values="40;45;40"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="120;125;120"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <!-- torso -->
        <line x1="40" y1="134" x2="35" y2="185">
          <animate
            attributeName="x1"
            values="40;45;40"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y1"
            values="134;139;134"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="35;45;35"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="185;190;185"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>
        <g class="leg">
          <line x1="70" y1="175" x2="35" y2="185">
            <animate
              attributeName="x1"
              values="70;80;70"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y1"
              values="175;205;175"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="35;45;35"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="185;190;185"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
          <line x1="70" y1="175" x2="50" y2="225">
            <animate
              attributeName="x1"
              values="70;80;70"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y1"
              values="175;205;175"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="50;75;50"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="225;250;225"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
        </g>
        <g class="leg">
          <line x1="65" y1="210" x2="35" y2="185">
            <animate
              attributeName="x1"
              values="65;80;65"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y1"
              values="210;195;210"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="35;45;35"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="185;190;185"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
          <line x1="65" y1="210" x2="75" y2="250">
            <animate
              attributeName="x1"
              values="65;80;65"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y1"
              values="210;195;210"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="75;50;75"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="250;225;250"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
        </g>
      </g>
    </svg>
    <h1 class="ms-4">LOADING...</h1>
  </div>
</template>

<style lang="scss">
#loading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #000;

  svg {
    width: 100px;
    height: 300px;
  }

  @keyframes halo-shrink {
    from {
      r: 310;
    }
    to {
      r: 130;
    }
  }

  .halo {
    animation: halo-shrink 10s ease-out 1s 1 forwards;
  }

  @keyframes stairs-slide {
    from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(-25px, -25px);
    }
  }

  .stairs {
    animation: stairs-slide 1s linear 0.2s infinite;
  }

  @keyframes flame-fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.3;
    }
  }

  @keyframes flame-dance {
    from {
      transform: rotate(5deg) scale(1);
    }
    to {
      transform: rotate(-5deg) scale(1.1);
    }
  }

  @keyframes red-flame-pulse {
    from {
      fill: #e64601;
    }
    to {
      fill: #f57f4c;
    }
  }

  @keyframes white-flame-pulse {
    from {
      fill: #ffd185;
    }
    to {
      fill: #fff;
    }
  }

  .flame {
    transform: translate(60px, 50px);
    width: 20px;
    height: 29px;
    animation: flame-fade 10s ease-out 1s forwards;
  }
  .outerFlame,
  .innerFlame {
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    transform-origin: 10px 20px;
  }

  .outerFlame {
    animation-name: flame-dance, red-flame-pulse;
    animation-duration: 0.7s, 1.5s;
    animation-direction: alternate;
  }

  .innerFlame {
    animation-name: flame-dance, white-flame-pulse;
    animation-duration: 0.3s, 1s;
    animation-direction: alternate-reverse;
  }

  @keyframes spark-rise {
    9%,
    16% {
      transform: translate(0, 0);
      opacity: 0;
    }
    10% {
      transform: translate(0, 0);
      opacity: 1;
    }
    11% {
      transform: translate(-3px, -15px);
      opacity: 0.9;
    }
    12% {
      transform: translate(3px, -25px);
      opacity: 0.8;
    }
    13% {
      transform: translate(-2px, -33px);
      opacity: 0.7;
    }
    14% {
      transform: translate(1px, -42px);
      opacity: 0.4;
    }
    15% {
      transform: translate(0px, -50px);
      opacity: 0.1;
    }
  }

  .sparks > * {
    animation-name: spark-rise, spark-fade;
    animation-duration: 15s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }
  .spark_1 {
    animation-delay: 1s;
  }
  .spark_2 {
    animation-delay: 4s;
  }
  .spark_3 {
    animation-delay: 7s;
  }
  .spark_4 {
    animation-delay: 10s;
  }
  .spark_5 {
    animation-delay: 13s;
  }

  .head-torso {
    line {
      stroke: black;
      stroke-width: 2px;
    }
  }
}
</style>
