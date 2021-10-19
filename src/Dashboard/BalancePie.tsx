import React, { useEffect } from 'react';
import { VictoryPie, VictoryTheme } from 'victory-native';
import { PieData } from '../Constants/Constants';
import Svg, { Circle } from 'react-native-svg';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CIRCLE_LENGTH = 720; //2PI*R
const CIRCLE_RADIUS = CIRCLE_LENGTH / (2 * Math.PI);
const BACKGROUND_COLOR_STROKE = '#FFF';
const STROKE_WIDTH = 45;

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
  // const [text, setText] = useState('text');
  useEffect(() => {
    data?.sort(compareData);
  }, [data]);

  return (
    <Svg width={width} height={345}>
      <Circle cx={width / 2} cy={height / 4 - 10} r={CIRCLE_RADIUS} stroke={BACKGROUND_COLOR_STROKE} strokeWidth={STROKE_WIDTH} />
      {/* <Text fill="red" stroke="none" fontSize="20" fontWeight="bold" x="180" y="180" textAnchor="middle">
        {text}
      </Text> */}
      <VictoryPie
        standalone={false}
        data={data}
        innerRadius={100}
        theme={VictoryTheme.material}
        padAngle={2}
        endAngle={angle}
        style={{
          data: {
            borderRadius: 50,
          },
          labels: { fontSize: 13, padding: 20, fontFamily: 'SF-Pro-Text-Regular' },
        }}
        padding={{ left: 50, right: 50 }}
        animate={{
          easing: 'expOut',
          duration: 1100,
        }}
      />
    </Svg>
  );
};

export default React.memo(BalancePie);
