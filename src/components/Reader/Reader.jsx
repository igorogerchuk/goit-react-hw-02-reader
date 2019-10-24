import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';
import styles from './Reader.module.css';

class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    page: 1,
  };

  prevPage = () => {
    this.state.page > 1
      ? this.setState(state => ({ page: state.page - 1 }))
      : this.setState(state => ({ page: this.props.items.length }));
  };

  nextPage = () => {
    this.state.page < this.props.items.length
      ? this.setState(state => ({ page: state.page + 1 }))
      : this.setState(state => ({ page: 1 }));
  };

  render() {
    const { page } = this.state;
    const { items } = this.props;
    return (
      <div class={styles.reader}>
        <Controls prevPage={this.prevPage} nextPage={this.nextPage} />
        <Counter currentPage={page} pagesQuantity={items.length} />
        <Publication page={page} publications={items} />
      </div>
    );
  }
}

export default Reader;
