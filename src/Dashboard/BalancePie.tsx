import React, { useEffect } from 'react';
import { VictoryPie, VictoryTheme } from 'victory-native';
import { PieData } from '../Constants/Constants';

interface BalancePieProps {
  data: PieData[] | undefined;
  angle: number;
}

function compareData(a: PieData, b: PieData): number {
  if (a.y < b.y) return 1;
  if (a.y > b.y) return -1;
  return 0;
}

const BalancePie = ({ data, angle }: BalancePieProps): React.ReactElement => {
  useEffect(() => {
    data?.sort(compareData);
  }, [data]);

  return (
    <VictoryPie
      data={data}
      innerRadius={100}
      theme={VictoryTheme.material}
      padAngle={2}
      endAngle={angle}
      animate={{
        easing: 'expOut',
        duration: 1100,
      }}
    />
  );
};

export default BalancePie;
