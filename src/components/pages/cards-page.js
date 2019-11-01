import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withPokemonService } from '../hoc';
import { fetchCards } from '../../actions';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import './cards-page.css';
import { Link } from 'react-router-dom';

const CardItem = (item) => {
    const { id, imageUrl, name} = item;
    return (
        <li key={id} className="card-list-item">
            <img className="card-img" src={imageUrl} alt={name}/>
        </li>
    );
}

class CardsPage extends Component {

    componentDidMount() {
        this.props.fetchCards(this.props.match.params.id);
    }

    render() {

        const {cards, loading, error} = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <div className="container">
                <button className="btn-primary">
                    <Link to="/" >Go Home</Link>
                </button>
                <ul className="card-list">
                    {
                        cards.map(CardItem)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ cardList: {cards, loading, error} }) => {
    return {cards, loading, error};
}

const mapDispatchToProps = (dispatch, {pokemonService}) => {
    return bindActionCreators({
        fetchCards: fetchCards(pokemonService)
    }, dispatch)
}

export default compose(
    withPokemonService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CardsPage);