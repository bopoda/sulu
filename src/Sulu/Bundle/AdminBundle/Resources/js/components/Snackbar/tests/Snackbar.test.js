// @flow
import React from 'react';
import {render, shallow} from 'enzyme';
import Snackbar from '../Snackbar';

jest.mock('../../../utils/Translator', () => ({
    translate: jest.fn((key) => key),
}));

test('Render an error snackbar', () => {
    expect(render(<Snackbar onCloseClick={jest.fn()} type="error" />)).toMatchSnapshot();
});

test('Render a warning snackbar', () => {
    expect(render(<Snackbar onCloseClick={jest.fn()} type="warning" />)).toMatchSnapshot();
});

test('Render an error snackbar without close button', () => {
    expect(render(<Snackbar type="error" />)).toMatchSnapshot();
});

test('Click the snackbar should call the onClick callback', () => {
    const clickSpy = jest.fn();
    const snackbar = shallow(<Snackbar onClick={clickSpy} type="error" />);

    snackbar.simulate('click');

    expect(clickSpy).toBeCalledWith();
});

test('Call onCloseClick callback when close button is clicked', () => {
    const closeClickSpy = jest.fn();
    const snackbar = shallow(<Snackbar onCloseClick={closeClickSpy} type="error" />);

    snackbar.find('Icon[name="su-times"]').prop('onClick')();

    expect(closeClickSpy).toBeCalledWith();
});