import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import FilterData from '../components/FilterData';

describe('FilterData', () => {
  it('filtrar por type category', (done) => {
    const filterData = ({setOption}) => {
      expect(setOption).toBe('morning');
    };
    done();
    const { getByTestId } = render(
        <FilterData setOption={() => {}} filterData={ filterData } />,
    );
    const btnOption = getByTestId('btn-option-1');
    fireEvent.click(btnOption);
  });
});
describe('FilterData', () => {
  it('filtrar por type category', (done) => {
    const filterData = ({setOption}) => {
      expect(setOption).toBe('rest-day');
    };
    done();
    const { getByTestId } = render(
      <FilterData setOption={() => {}} filterData= {filterData} />,
    );
    const btnOption = getByTestId('btn-option-2');
    fireEvent.click(btnOption);
  });
});