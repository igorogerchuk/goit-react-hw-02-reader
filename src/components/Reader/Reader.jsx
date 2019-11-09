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
    disabledPrev: true,
    disabledNext: false,
  };

  prevPage = () => {
    if (this.state.page > 1) {
      this.setState(state => ({
        page: state.page - 1,
        disabledNext: false,
      }));
    }
    if (this.state.page <= 2) {
      this.setState({ disabledPrev: true });
    }
  };

  nextPage = () => {
    if (this.state.page < this.props.items.length) {
      this.setState(state => ({
        page: state.page + 1,
        disabledPrev: false,
      }));
    }
    if (this.state.page >= this.props.items.length - 1) {
      this.setState({ disabledNext: true });
    }
  };

  render() {
    const { page, disabledPrev, disabledNext } = this.state;
    const { items } = this.props;
    return (
      <div class={styles.reader}>
        <Controls
          prevPage={this.prevPage}
          nextPage={this.nextPage}
          disabledPrev={disabledPrev}
          disabledNext={disabledNext}
        />
        <Counter currentPage={page} pagesQuantity={items.length} />
        <Publication page={page} publications={items} />
      </div>
    );
  }
}

export default Reader;
