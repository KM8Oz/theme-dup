import * as React from "react";

function SvgDrawing({offsit}) {
  return (
    <svg width={window.innerWidth+100} height={500}  viewBox="0 -60 210 500" >
      <circle
        cx={103.565}
        cy={161.774}
        r={offsit.x}
        fill="none"
        strokeWidth={1.323}
        stroke="teal"
      />
      <path
        d={offsit.st1}
        fill="none"
        stroke="teal"
        strokeWidth={1.323}
      />
      <path
        d={offsit.st2}
        fill="none"
        stroke="teal"
        strokeWidth={1.305}
      />
      <path
        d={offsit.st3}
        fill="none"
        stroke="teal"
        strokeWidth={1.339}
      />
      <path
        d={offsit.st4}
        fill="none"
        stroke="teal"
        strokeWidth={1.321}
      />
      <path
        d={offsit.st5}
        fill="none"
        stroke="teal"
        strokeWidth={1.323}
      />
      <ellipse
      style={{cursor:'pointer'}}
        cx={279.553}
        cy={8.703}
        rx={46.302}
        ry={45.606}
        fill="#fff"
        stroke="teal"
        strokeWidth={1.323}
      />
      <ellipse
      style={{cursor:'pointer'}}
        cx={-69.627}
        cy={8.355}
        rx={46.302}
        ry={45.606}
        fill="#fff"
        stroke="teal"
        strokeWidth={1.323}
      />
      <ellipse
      style={{cursor:'pointer'}}
        cx={-68.931}
        cy={318.196}
        rx={46.302}
        ry={45.606}
        fill="#fff"
        stroke="teal"
        strokeWidth={1.323}
      />
      <ellipse
        
        cx={278.509}
        cy={318.196}
        rx={46.302}
        ry={45.606}
        fill="#fff"
        stroke="teal"
        strokeWidth={1.323}
      />
      <ellipse
      style={{cursor:'pointer'}}
        cx={314.019}
        cy={164.32}
        rx={46.302}
        ry={45.606}
        fill="#fff"
        stroke="teal"
        strokeWidth={1.323}
      />
      <ellipse
       style={{cursor:'pointer'}}
        cx={-106.53}
        cy={164.32}
        rx={46.302}
        ry={45.606}
        fill="#fff"
        stroke="teal"
        strokeWidth={1.323}
      />
      <path
        fill="#fff"
        fillOpacity={0.97}
        d={offsit.st6}
      />
      <image
        width={178.883}
        height={186.466}
        preserveAspectRatio="none"
        style={{opacity:offsit.img,cursor:'pointer'}}  
        xlinkHref="data:image/png;base64,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"
        x={14.681}
        y={71.155}
      />
      <g style={{cursor:'pointer'}}>  
      <path
        d="M-70.683 177.255a38.534 38.612 30.885 01-48.82 24.365 38.534 38.612 30.885 01-24.275-48.813 38.534 38.612 30.885 0148.8-24.404 38.534 38.612 30.885 0124.314 48.794M-32.388 20.594a38.534 38.612 30.885 01-48.82 24.365 38.534 38.612 30.885 01-24.275-48.813 38.534 38.612 30.885 0148.8-24.405 38.534 38.612 30.885 0124.314 48.794M315.748 21.29a38.534 38.612 30.885 01-48.82 24.366 38.534 38.612 30.885 01-24.275-48.814 38.534 38.612 30.885 0148.8-24.404 38.534 38.612 30.885 0124.314 48.794M350.561 176.559a38.534 38.612 30.885 01-48.82 24.365 38.534 38.612 30.885 01-24.275-48.813 38.534 38.612 30.885 0148.8-24.405 38.534 38.612 30.885 0124.315 48.794M314.355 305.261a38.612 38.534 59.115 00-48.82-24.365 38.612 38.534 59.115 00-24.275 48.813 38.612 38.534 59.115 0048.8 24.405 38.612 38.534 59.115 0024.315-48.794M-33.085 330.435a38.534 38.612 30.885 01-48.82 24.365 38.534 38.612 30.885 01-24.275-48.813 38.534 38.612 30.885 0148.8-24.405 38.534 38.612 30.885 0124.315 48.794"
        fill="none"
        stroke="teal"
        strokeWidth={0.817}
      />
      </g>
    
    </svg>
  );
}

export default SvgDrawing;

