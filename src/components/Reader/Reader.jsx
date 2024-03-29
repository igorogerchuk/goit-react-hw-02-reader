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

  changePage = ({ target: { innerText: buttonName } }) => {
    this.setState(state => ({
      page: buttonName === 'Вперед' ? state.page + 1 : state.page - 1,
    }));
  };

  render() {
    const { page } = this.state;
    const { items } = this.props;
    return (
      <div className={styles.reader}>
        <Controls
          changePage={this.changePage}
          currentPage={page}
          lastPage={items.length}
        />
        <Counter currentPage={page} lastPage={items.length} />
        <Publication page={page} publications={items} />
      </div>
    );
  }
}

export default Reader;
