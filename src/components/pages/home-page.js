import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withPokemonService } from '../hoc';
import { fetchSets } from '../../actions';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import SetsItem from '../sets-item';

import './home-page.css';

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchSets();
    }
    
    render() {

        const {sets, loading, error} = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <div className="set-section container">
                {
                    sets.map((set) => {
                        return (
                            <SetsItem key={set.code} set={set}/>
                        )
                    })
                }
            </div>
        );        
    }

}

const mapStateToProps = ({ setList: {sets, loading, error} }) => {
    return {sets, loading, error};
}

const mapDispatchToProps = (dispatch, {pokemonService}) => {
    return bindActionCreators({
        fetchSets: fetchSets(pokemonService)
    }, dispatch)
}

export default compose(
    withPokemonService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage);