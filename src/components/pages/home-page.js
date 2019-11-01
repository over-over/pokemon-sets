import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withPokemonService } from '../hoc';
import { fetchSets, sortSets } from '../../actions';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import SetsItem from '../sets-item';

import './home-page.css';

class HomePage extends Component {

    state = {
        sortNameAsc: false,
        sortDateAsc: false,
    }

    componentDidMount() {
        this.props.fetchSets();
    }

    sortSetsHandler(key, type) {
        this.setState({[key] : !type});
        let sortFunc = null;
        
        switch (true) {
            case key === 'sortNameAsc' && type:
                sortFunc = (a,b) => (a.name.localeCompare(b.name));
                break;
            case key === 'sortNameAsc' && !type:
                sortFunc = (a,b) => (b.name.localeCompare(a.name));
                break;
            case key === 'sortDateAsc' && type:
                sortFunc = (a,b) => (new Date(a.releaseDate) - new Date(b.releaseDate));
                break;
            case key === 'sortDateAsc' && !type:
                sortFunc = (a,b) => (new Date(b.releaseDate) - new Date(a.releaseDate));
                break;
            default:
                sortFunc = (a,b) => (new Date(a.releaseDate) - new Date(b.releaseDate));
                break;
        }

        this.props.sortSets(this.props.sets, sortFunc);
    }
    
    render() {

        const {sets, loading, error} = this.props;
        const {sortNameAsc, sortDateAsc} = this.state;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <>
                <div>
                    <button type="button" 
                        className="btn-primary" 
                        onClick={() => this.sortSetsHandler('sortDateAsc', sortDateAsc)}>
                            <span>Sort by date: {sortDateAsc ? 'ASC' : 'DESC'}</span>
                        </button>
                    <button type="button" 
                        className="btn-primary" 
                        onClick={() => this.sortSetsHandler('sortNameAsc', sortNameAsc)}>
                            <span>Sort by name: {sortNameAsc ? 'ASC' : 'DESC'}</span>
                        </button>                
                </div>
                <div className="set-section">
                    {
                        sets.map((set) => {
                            return (
                                <SetsItem key={set.code} set={set}/>
                            )
                        })
                    }
                </div>            
            </>
        );        
    }

}

const mapStateToProps = ({ setList: {sets, loading, error} }) => {
    return {sets, loading, error};
}

const mapDispatchToProps = (dispatch, {pokemonService}) => {
    return bindActionCreators({
        fetchSets: fetchSets(pokemonService),
        sortSets: sortSets(),
    }, dispatch)
}

export default compose(
    withPokemonService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage);