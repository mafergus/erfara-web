import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import SearchBar from './SearchBar';
var ParseComponent = ParseReact.Component(React);

export default class Discover extends React.Component {
	render() {
		return (
			<div style={{marginTop: '60px'}}>
				<SearchBar isExperience={false}/>
			</div>
		)
	}
}