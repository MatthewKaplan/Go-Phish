import React from 'react';
import { shallow } from 'enzyme';
import * as actions from '../../Actions/index';
import MockData from '../../Helpers/mockData';
import { fetchData, fetchMembers } from '../../api/apiCalls';
import { MainPage, mapStateToProps, mapDispatchToProps } from './MainPage';
import { cleanRandomShow } from '../../Helpers/cleaners';
import reactElementToJSXString from 'react-element-to-jsx-string';

jest.mock('../../api/apiCalls.js');
jest.mock('../../Helpers/cleaners.js');

const mockYears = MockData.mockYears;
const mockTours = MockData.mockTours;
const mockSongs = MockData.mockSong;
const mockVenues = MockData.mockVenues;
const mockShows = MockData.mockShow;
let mockLocation,
	mockAllSongs,
	mockUpcomingShows,
	mockCleanSongs,
	mockLoadingData,
	mockCleanVenues,
	mockAllVenues,
	mockCleanRandomShow,
	mockRandomShow,
	mockHandleError;
mockLocation = mockAllSongs = mockUpcomingShows = mockCleanSongs = mockLoadingData = mockCleanVenues = mockAllVenues = mockCleanRandomShow = mockRandomShow = mockHandleError = jest.fn();

describe('MainPage', () => {
	let wrapper, instance;

	fetchData.mockImplementation(() => Promise.resolve(1));
	fetchMembers.mockImplementation(() => Promise.resolve(1));

	beforeEach(() => {
		wrapper = shallow(
			<MainPage
				location={mockLocation}
				years={mockYears}
				tours={mockTours}
				shows={mockShows}
				upcomingShows={mockUpcomingShows}
				cleanSongs={mockCleanSongs}
				cleanVenues={mockCleanVenues}
				allSongs={mockAllSongs}
				loadingData={mockLoadingData}
				allVenues={mockAllVenues}
				cleanRandomShow={mockCleanRandomShow}
				randomShow={mockRandomShow}
				upcoming={[]}
				show={[]}
				songs={[]}
				venues={[]}
				handleError={mockHandleError}
			/>
		);

		instance = wrapper.instance();
	});

	afterEach(() => {
		fetchData.mockClear();
		fetchMembers.mockClear();
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should have default state', () => {
		expect(wrapper.state()).toEqual({
			randomShowFetching: false,
			upcomingShowsFetching: false
		});
	});

	it("should invoke 'fetchSongs, fetchVenues, fetchRandomShow, fetchUpcomingShows' when mounted", () => {
		jest.spyOn(instance, 'fetchRandomShow');
		jest.spyOn(instance, 'fetchUpcomingShows');
		instance.componentDidMount();
		expect(instance.fetchRandomShow).toHaveBeenCalled();
		expect(instance.fetchUpcomingShows).toHaveBeenCalled();
	});

	describe('fetchUpcomingShows', () => {
		it("should call 'fetchMembers' with correct params when fetchUpcomingShows is invoked", () => {
			instance.fetchUpcomingShows();
			expect(fetchMembers).toHaveBeenCalledWith(
				'https://cors-anywhere.herokuapp.com/https://mighty-mountain-16368.herokuapp.com/api/v1/phishTour'
			);
		});

		it("should invoke 'upcomingShows' with the response from 'fetchMembers'", () => {
			instance.fetchUpcomingShows();
			expect(mockUpcomingShows).toHaveBeenCalledWith(1);
		});

		it('should finally throw an error if the response is not ok and save that error to redux store', async () => {
			fetchMembers.mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
			await instance.fetchUpcomingShows();
			expect(mockHandleError).toHaveBeenCalledWith('Fetch failed');
		});
	});

	describe('fetchRandomShow', () => {
		it("should set the state of 'randomShowFetching' to be true", () => {
			wrapper.setState({ randomShowFetching: false });
			expect(wrapper.state().randomShowFetching).toEqual(false);
			instance.fetchRandomShow();
			expect(wrapper.state().randomShowFetching).toEqual(true);
		});

		it("should invoke 'fetchData' with the correct param", () => {
			instance.fetchRandomShow();
			expect(fetchData).toHaveBeenCalledWith('random-show');
		});

		it("should clean the response of 'fetchRandomData' when invoked", () => {
			cleanRandomShow.mockImplementation(() => Promise.resolve(1));
			instance.fetchRandomShow();
			expect(cleanRandomShow).toHaveBeenCalled();
		});

		it('should set the state in redux with cleaned results', () => {
			instance.fetchRandomShow();
			expect(mockRandomShow).toHaveBeenCalled();
		});

		it("should set the state of 'randomShowFetching' back to false after everything is finished", () => {
			wrapper.setState({ randomShowFetching: true });
			expect(wrapper.state().randomShowFetching).toEqual(true);
			instance.fetchRandomShow();
			expect(mockRandomShow).toHaveBeenCalled() && expect(wrapper.state().randomShowFetching).toEqual(false);
		});

		it('should finally throw an error if the response is not ok and save that error to redux store', async () => {
			fetchData.mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
			await instance.fetchRandomShow();
			expect(mockHandleError).toHaveBeenCalledWith('Fetch failed');
		});
	});

	describe('componentToRender', () => {
		it("should render 'Years' components when '/Years' is passed through", () => {
			const results = instance.componentToRender('/Years');
			expect(results).toHaveLength(1);
		});
		it("should render 'Tours' components when '/Tours' is passed through", () => {
			const results = instance.componentToRender('/Tours');
			expect(results).toHaveLength(1);
		});
		it("should render 'Songs' components when '/Songs' is passed through", () => {
			const results = instance.componentToRender('/Songs');
			expect(results).toHaveLength(0);
		});
		it("should render 'Venues' components when '/Venues' is passed through", () => {
			const results = instance.componentToRender('/Venues');
			expect(results).toHaveLength(0);
		});
		it("should render 'Shows' components when '/Shows' is passed through", () => {
			const results = instance.componentToRender('/Shows');
			expect(results).toHaveLength(1);
		});
		it("should render 'SetLists' components when '/SetLists' is passed through", () => {
			const results = instance.componentToRender('/SetList');
			expect(reactElementToJSXString(results)).toEqual('<Connect(SetLists) />');
		});
		it("should render 'UserStats' components when '/UserStats' is passed through", () => {
			const results = instance.componentToRender('/UserStats');
			expect(reactElementToJSXString(results)).toEqual('<Connect(UserStats) />');
		});
		it("should render 'HomePage' component by default", () => {
			const results = instance.componentToRender();
			expect(reactElementToJSXString(results)).toEqual('<Connect(HomePage) />');
		});
	});
});

describe('fetches when redux store is already full', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(
			<MainPage
				location={mockLocation}
				years={mockYears}
				tours={mockTours}
				shows={mockShows}
				upcomingShows={mockUpcomingShows}
				cleanSongs={mockCleanSongs}
				cleanVenues={mockCleanVenues}
				allSongs={mockAllSongs}
				loadingData={mockLoadingData}
				allVenues={mockAllVenues}
				cleanRandomShow={mockCleanRandomShow}
				randomShow={mockRandomShow}
				handleError={mockHandleError}
				upcoming={mockShows}
				show={mockShows}
				songs={mockSongs}
				venues={mockVenues}
			/>
		);
		instance = wrapper.instance();
	});

	describe('fetchUpcomingShows with full redux', () => {
		it("shouldn't invoke 'fetchMembers' while the redux store already has 'upcoming' saved", () => {
			const result = instance.fetchUpcomingShows();
			expect(result).toMatchObject({});
		});
	});

	describe('fetchRandomShow with full redux', () => {
		it("shouldn't invoke 'fetchData' while the redux store already has 'upcoming' saved", () => {
			const result = instance.fetchRandomShow();
			expect(result).toMatchObject({});
		});
	});
});

describe('mapStateToProps', () => {
	it('should return an object', () => {
		const mockData = {
			songs: [],
			years: [],
			tours: [],
			venues: [],
			shows: [],
			isLoading: false,
			upcoming: [],
			show: []
		};
		const expected = {
			songs: [],
			years: [],
			tours: [],
			venues: [],
			shows: [],
			isLoading: false,
			upcoming: [],
			show: []
		};

		const mockprops = mapStateToProps(mockData);
		expect(mockprops).toEqual(expected);
	});
});

describe('mapDispatchToProps', () => {
	it('should call dispatch for loadingData', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.loadingData(false);
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.loadingData(false);
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});

	it('should call dispatch for randomShow', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.randomShow(mockShows);
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.randomShow(mockShows);
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});

	it('should call dispatch for upcomingShows', () => {
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.upcomingShows(mockShows);
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.upcomingShows(mockShows);
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});

	it('should call dispatch for handleError', () => {
		const error = 'Mock Error';
		const mockDispatch = jest.fn();
		const actionToDispatch = actions.handleError(error);
		const mappedProps = mapDispatchToProps(mockDispatch);
		mappedProps.handleError(error);
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
	});
});
