import * as React from "react";
import "../components/FormComp/FormScreens.css";
function DogIcon(props) {
  return (
    <div className="svgBox">
      <svg
        id="prefix__Layer_1"
        x={0}
        y={0}
        viewBox="0 0 640 480"
        xmlSpace="preserve"
        {...props}
      >
        {/* <style>{".prefix__st0{fill:#}"}</style> */}
        <path
          className="prefix__st0"
          fill={props.localValue}
          d="M330.82 125.01c3.49 1.92 7.09 2.86 10.87 2.93 1.22.02 2.06.64 2.95 1.23 7.41 4.87 14.8 9.77 22.21 14.66 3.02 1.99 6.46 3.09 9.73 4.54 9.72 4.28 16.66 11.72 22.99 19.95 6.13 7.96 11.48 16.46 17.45 24.53 6.59 8.91 12.32 18.37 17.88 27.9 3.69 6.34 7.28 12.88 9.62 19.95.46 1.4 1.1 2.76 1.83 4.05 2.38 4.23 1.98 9.02 2.88 13.54.59 2.96 1.55 5.84 2.18 8.8 1.77 8.28 3.91 16.5 3.43 25.1-.25 4.53-1.22 8.92-2.12 13.32-1.27 6.26-2.42 12.47-2.21 18.94.16 4.97-1.18 9.71-4.78 13.5-1.56 1.64-3.12 3.08-5.68 2.03-2.74-1.13-3.81-3.26-3.97-6.05-.29-4.87.53-9.62 1.55-14.34.72-3.34.89-6.59.65-10.06-.26-3.67-.77-7.19-1.78-10.67-.62-2.15-1.5-4.22-2.49-6.3-.21 2.19-.63 4.38.27 6.47 3.59 8.32.98 15.38-4.08 22.16-7.23 9.69-16.28 17.32-26.53 23.5-4.69 2.83-10.07 4.2-15.48 4.95-8.38 1.15-16.71.4-25.08-.68-7.92-1.03-15.76-2.57-23.68-3.61-5.25-.69-9.83.68-14.53 2.33-5.94 2.09-11.88 2.22-17.8.03-2.64-.98-4.21-5.14-3.5-8.89.39-2.08.9-4.13 1.86-6 2.47-4.81 2.14-9.82 1.08-14.83-.56-2.65-.78-5.15.14-7.77 1-2.84.44-5.81.13-8.8-.79 2.79-1.65 5.56-2.36 8.37-1.52 5.99-4.19 11.29-8.45 15.88-2.61 2.81-5.3 5.48-8.45 7.61-5.21 3.51-9.6 2.23-12.48-3.37-2.25-4.38-2.72-8.95-2.11-13.78.37-2.92.14-5.89.47-8.85.45-4.07.88-8.16.16-12.31-.31-1.78-.6-3.54-1.27-5.18-1.45-3.55-3.95-4.64-7.76-3.57-4.69 1.32-7.54 4.8-10.02 8.65-3.15 4.88-5.1 10.32-7.17 15.71-2.6 6.77-5.58 13.36-9.61 19.43-2.46 3.71-6.1 4.05-9.9 3.59-6.74-.83-8.07-5.13-8.17-11.56-.22-13.43.07-26.87-.13-40.31-.1-6.36-1.04-12.69-1.26-19.05-.31-8.8-1.18-17.63-.44-26.41.71-8.37 3.09-16.47 5.33-24.56a210.65 210.65 0 005.4-25.51c1.07-7.22.75-14.45.87-21.69.16-9.84 2.43-19.31 5.93-28.4 1.93-5.01 6.24-8.42 10.63-11.48 3.7-2.57 7.45-5.08 11.08-7.75 1.93-1.42 3.87-1.92 6.08-1 4.32 1.81 8.9 2.01 13.48 2.3 2.55.16 5.08.59 7.62.91 7.54.96 15.11.25 22.66.46 1.1.03 2.18.01 3.22.42 2.78 1.11 5.45 1.42 8.56.77 2.21-.46 4.82.85 7.11 1.83 1.66.67 3.23 1.55 4.99 2.44zm-32.34 61.02c.53-.33 1.13-.58 1.56-1.01.53-.52 1.28-1.2.74-1.99-.64-.92-1.42-.44-2.21.09-5.15 3.41-11.08 4.84-16.93 6.41-2.21.6-2.65.19-3-2.14-.32-2.09.02-4.08.43-6.12.29-1.42.76-2 2.17-1.4 1.55.67 3.19.69 4.83.58.88-.06 1.66-.31 1.93-1.35 1.06-4.13-2.64-8-6.86-7.2-.83.16-1.71.14-2.56.14-2.58.02-5.16-.13-7.72.06-1.84.13-3.52.97-4.16 2.9-.39 1.18-.57 2.47.43 3.52 1.46 1.53 3 .79 4.49.08 1.44-.69 1.82.02 1.88 1.29.07 1.53.46 2.93 1.73 3.92 2.01 1.57.77 3.93 1.39 5.84.18.55-.72.65-1.27.66-5.02.08-9.84-1.08-14.64-2.39-.83-.23-1.85-1.72-2.51-.2-.6 1.38.97 1.68 1.87 2.19.27.15.57.26.87.34 8.08 2.18 16.2 3.35 24.43.85 1.29-.39 1.53.03 1.86 1.16.9 3.11 2.38 5.91 4.93 8.06 1.3 1.1 2.62 1.69 4.25.79 1.69-.93 2.03-2.52 1.82-4.21-.21-1.71-.97-3.27-1.79-4.79-.62-1.15-1.65-2.34-1.66-3.52-.01-1.57 2.22-1.08 3.02-2.15.08-.11.24-.17.68-.41zm18.98-44c-1.2-3.46-2.48-6.81-5.02-9.66-2.48-2.78-8.23-1.34-8.85 2.43-1.33 8.06-.97 15.69 4.83 22.16a9.532 9.532 0 004.3 2.72c2.21.68 4.16-1.11 4.76-4.27.82-4.31.79-8.65-.02-13.38zm-70.78.19c-.85 2.12-.94 4.41-1.23 6.63-.4 3.1.29 6.03 2.24 8.6 2.5 3.28 6.38 3.03 8.32-.54 1.31-2.42 2.23-4.98 2.82-7.66.99-4.52 1.21-8.99-1.59-13.03-2.31-3.34-6.13-3.19-8.13.29-.97 1.68-1.83 3.44-2.43 5.71zm25.9 25.03c4.11 1.13 8.3-.08 12.44.47.73.1 1.51-.41 1.57-1.4.05-.88.07-1.74-.88-2.22-3.59-1.83-7.36-2.53-11.28-1.46-2.3.62-3.03 2.38-1.85 4.61zm3.66-6.47c2.06.16 4.2-.44 6.18.67.67.38 1.62.6 2.12-.18.5-.77.19-1.61-.45-2.33-1.47-1.66-3.39-2.45-5.49-2.8-.98-.16-2.02-.08-3.03-.02-1.7.1-2.93 1-2.91 2.72.02 1.97 1.9 1.59 3.58 1.94zm1.54-19.43c-.21 1.2.27 1.82 1.45 2.23 1.14.4 2.32.14 3.43.49.96.3 1.77.11 2-.93.21-.98-.44-1.71-1.32-1.92-1.77-.44-3.57-1.12-5.56.13zM321.52 118.91c-2.18-.45-2.75-1.28-2-3.47 2.63-7.63 6.32-14.74 10.26-21.74 1.46-2.59 3.67-4.37 6.71-4.97 5.64-1.12 11.03-3.23 16.72-4.17 2.07-.35 4.18 0 6.25-.6 1-.29 1.21.47.73 1.28-1.07 1.81-2.07 3.67-3.28 5.38-2.47 3.5-4.98 6.97-7.05 10.72-.9 1.64-2.4 1.78-3.76 1.71-2.53-.13-4.73.68-7.11 1.68.47.52.93.69 1.57.48 1.22-.41 2.48-.27 3.71-.17 1.39.11 2.1.65 1.4 2.32-2.24 5.33-4.06 10.78-3.77 16.68.09 1.72-1.05 1.69-2.17 1.55-2.64-.34-5.2-1.08-7.46-2.49-3.27-2.05-6.8-3.37-10.75-4.19zM222.77 101.66c.15-.2.21-.26.25-.32 2.98-4.49 4.9-4.77 9.02-1.49 4.5 3.58 8.82 7.37 13.47 10.75 2.28 1.66 4.66 3.08 7.26 4.14.56.23 1.32.25 1.33 1.07.01.66-.65.81-1.08 1.11-3.96 2.75-7.93 5.48-11.87 8.27-1.73 1.22-3.17 2.78-4.49 4.41-1.75 2.17-2.05 2.25-3.58-.19-1.18-1.88-2.77-3.07-4.84-3.82-1.6-.58-2.85-.15-4.06.86-2.33 1.95-3.92 4.39-5 7.22a28.43 28.43 0 01-3.95 7.16c0-13.5 1.72-26.64 7.54-39.17z"
        />
        <path
          className="lilTongue"
          d="M295.96 197.36c-.21 2.14-1.11 2.23-2.42 1.04-2.19-2-3.42-4.56-4.26-7.37-.48-1.58 1.03-1.25 1.59-1.78.67-.65 1.2-.14 1.61.58 1.35 2.36 2.81 4.67 3.48 7.53z"
        />
        <path
          className="dogEyes"
          d="M305.36 142.01v-3.74c0-.7.11-1.38.3-2.06.43-1.6 1.46-2.67 3-2.94 1.36-.25 2.32.82 3.03 1.85 1.79 2.57 3.21 5.34 3.79 8.46.7 3.77.71 7.52-.22 11.27-.7 2.8-2.24 3.04-4.04 1.31-3.97-3.84-6.19-8.32-5.86-14.15zM247.74 147.84c.7-3.48 1.24-6.8 3.16-9.67 1.26-1.87 2.87-2.01 4.51-.41 1.21 1.19 1.48 2.78 1.62 4.29.42 4.52-.31 8.9-2.66 12.83-2.11 3.53-3.01 2.95-5.33.34-1.85-2.08-1.24-4.71-1.3-7.38z"
        />
      </svg>
    </div>
  );
}

const MemoDogIcon = React.memo(DogIcon);
export default MemoDogIcon;
