import React from 'react';
import AppHeader from '../app_header/';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post_status_filter';
import PostList from "../post_list";
import PostAddForm from "../post_add_form";
import './app.css';

const App = () => {
	return (
		<div className="container">
			<AppHeader />
			<div className="search-panel d-flex">
				<SearchPanel />
				<PostStatusFilter />
			</div>
			<PostList />
			<PostAddForm />
		</div>

	)
}

export default App;