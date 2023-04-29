import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Rect, Txt} from '@motion-canvas/2d/lib/components';
import {beginSlide, createRef} from '@motion-canvas/core/lib/utils';
import {all, any, loop} from '@motion-canvas/core/lib/flow';
import {easeInOutCubic} from '@motion-canvas/core/lib/tweening';
import {Color} from '@motion-canvas/core/lib/types';
import {createSignal} from '@motion-canvas/core/lib/signals';
import {cancel} from '@motion-canvas/core/lib/threading';
import '../../fonts/Cera Pro Medium.otf';
import { Gradient } from '@motion-canvas/2d/lib/partials';

const YELLOW = '#FFC66D';
const PURPLE = '#560075'
const DEEPPURPLE = '#2D003D'
const GREEN = '#99C47A';
const BLUE = '#68ABDF';
const DEEPBLUE = '#2D5F8B';

export default makeScene2D(function* (view) {
  view.fontFamily(`'Cera Pro Medium', sans-serif`).fontWeight(500).fontSize(100);
  const backdrop = createRef<Rect>();
  const name = createRef<Txt>();
  const followerCount = createRef<Txt>();
  const followerPie = createRef<Circle>();
  const rotation = createSignal(0);
  const rotationScale = createSignal(0);

  view.add(
    <>
    <Rect
      cache
      ref={backdrop}
      width={'25%'}
      height={'10%'}
      fill={PURPLE}
      radius={40}
      smoothCorners
      x={-650}
      y={-150}
      rotation={() => rotation() * rotationScale()}
    >
      <Txt
        ref={name}
        scale={0.4}
        fill={'#fff'}
        text={''}
        rotation={() => -rotation() * rotationScale()}
      />
      
    </Rect>,
    <Circle
      ref={followerPie}
      x={800}
      y={400}
      width={200}
      height={200}
      startAngle={-90}
      endAngle={90}
      fill={BLUE}
    >
      <Txt
        ref={followerCount}
        fill={"fff"}
        text={'Followers:\n50/100'}
        fontSize={50}
        scale={0.6}
        textAlign={'center'}
      />
    </Circle>
    </>
  );

  const loopTask = yield loop(Infinity, () => all( /* PUT YOUR ELEMENT ANIMATIONS HERE */
    backdrop().fill(DEEPPURPLE, 10, easeInOutCubic, Color.createLerp('lab')).to(PURPLE, 10, easeInOutCubic, Color.createLerp('lab')),
    name().text('', 1, easeInOutCubic).to('XxEpicGamer69420xX', 1, easeInOutCubic).to('XxEpicGamer69420xX', 20, easeInOutCubic),
    followerCount().rotation(0, 0, easeInOutCubic).to(360, 0.7, easeInOutCubic),
    followerPie().fill(DEEPBLUE, 10, easeInOutCubic, Color.createLerp('lab')).to(BLUE, 10, easeInOutCubic, Color.createLerp('lab')),
  ));
  yield* beginSlide('MAIN');
  cancel(loopTask);
  yield* beginSlide('END')
});