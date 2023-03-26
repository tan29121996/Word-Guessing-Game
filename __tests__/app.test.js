import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { shallow } from 'enzyme';
import HomeScreen from '../screens/home/home';
import StageSelectScreen from '../screens/stageSelect/stageSelect';
import GameScreen from '../screens/game/game';
import RemoteImage from '../components/photo/remoteImage';
import Keyboard from '../components/keys/Keyboard';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Home Screen', () => {
  it('renders correctly', () => {
    const homeScreen = render(<HomeScreen />);
    expect(homeScreen).toBeTruthy();
  });

  it('navigates to the StageSelect screen when the start button is pressed', () => {
    const { getByTestId } = render(<HomeScreen navigation={{ navigate: mockedNavigate }} />);
    const startButton = getByTestId("start-button");

    fireEvent.press(startButton);

    expect(mockedNavigate).toHaveBeenCalledWith('StageSelect');
  });
});

describe('Stage Select Screen', () => {
  it('renders correctly', () => {
    const stageSelectScreen = render(<StageSelectScreen />);
    expect(stageSelectScreen).toBeTruthy();
  });
});

describe('Game Screen', () => {
  const mockedParams = {
    route: { params: { words: [{ word: "ant" }], stage: 1 } },
    navigation: ''
  };

  it('renders correctly', () => {
    const gameScreen = render(<GameScreen {...mockedParams} />);
    expect(gameScreen).toBeTruthy();
  });

  it('should add 100 points when the answer is correct', () => {
    const { getByTestId } = render(<GameScreen {...mockedParams} />);

    fireEvent.press(getByTestId("a"));
    fireEvent.press(getByTestId("n"));
    fireEvent.press(getByTestId("t"));
    fireEvent.press(getByTestId("↵"));

    expect(getByTestId("points").props.children).toEqual([100, " pts"]);
  });

  it('should deduct 100 points when the answer is incorrect', () => {
    const { getByTestId } = render(<GameScreen {...mockedParams} />);

    fireEvent.press(getByTestId("a"));
    fireEvent.press(getByTestId("n"));
    fireEvent.press(getByTestId("d"));
    fireEvent.press(getByTestId("↵"));

    expect(getByTestId("points").props.children).toEqual([-100, " pts"]);
  });
});

describe('Remote Image', () => {
  it('displays the image correctly', () => {
    const source = { uri: 'https://example.com/image.png' };
    const { getByTestId } = render(<RemoteImage source={source} />);
    const image = getByTestId('photo-frame-image');
    expect(image.props.source).toEqual(source);
  });
});

describe('Keyboard', () => {
  const onKeyPressed = jest.fn();
  const wrapper = shallow(<Keyboard onKeyPressed={onKeyPressed} />);

  it('calls onKeyPressed when a key is pressed', () => {
    const key = 'a';
    const touchable = wrapper.findWhere(node => node.prop('testID') === key);
    touchable.props().onPress();
    expect(onKeyPressed).toHaveBeenCalledWith(key);
  });
});


