import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Resizable } from 'react-resizable';
import Draggable from 'react-draggable';


export default function BarChart(){
  const eChartsOption={
    xAxis:{
      type:"category",
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis:{
      type:"value"
    },
    series:{
      data: [120, 200, 250, 80, 570, 810, 830],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  };
  
  const [size, setSize] = useState({ width: 400, height: 300 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleResize = (event, { size }) => {
    setSize(size);
  };

  const handleDrag = (event, { x, y }) => {
    setPosition({ x, y });
  };
  return(
    <div className='bar-chart'>
        <Draggable
      handle=".handle"
      position={position}
      onStop={handleDrag}
    >
      <Resizable
        className="handle"
        height={size.height}
        width={size.width}
        onResize={handleResize}
        resizeHandles={['se']}
      >
        <ReactECharts option={eChartsOption} />
      </Resizable>
    </Draggable>
    </div>
  
  );
}

