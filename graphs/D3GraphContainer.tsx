import React, { useEffect, useRef } from 'react';
import { TeamData } from 'types/nbaTeamData';
import { addRedditBarChart } from './d3/nbaRedditSubscribers';
import { addScatterPlot } from './d3/nbaScatterplot';
import { addOverUnderChart } from './d3/nbaOverUnders';
import { addShootingPlot } from './d3/shootingPlot';

export type D3GraphContainerProps = {
  graphId: string;
  data?: TeamData[];
};

export const D3GraphContainer = ({ graphId, data = [] }: D3GraphContainerProps) => {
  const ref = useRef(null);
  useEffect(() => {
    getGraphById(graphId, ref, data);
  }, [ref, graphId, data]);
  return <div className="my-2" ref={ref}></div>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getGraphById = (id: string, ref: React.RefObject<HTMLDivElement>, data?: any): void => {
  if (id === 'nbaRatingPlot') {
    if (data.length > 0) {
      addScatterPlot(data, ref);
    } else {
      addScatterPlot(data, ref);
    }
  } else if (id === 'nbaRedditGraph') {
    addRedditBarChart(data, ref);
  } else if (id === 'nbaOverUnder') {
    addOverUnderChart(data, ref);
  } else if (id === 'shootingPlot') {
    addShootingPlot(data, ref);
  }
};
