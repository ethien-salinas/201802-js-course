import React, { Component } from 'react';

class TablePaginator extends Component {

  render() {

    return (
      <section className="section">
        <div className="container">
          <nav className="pagination is-centered" aria-label="pagination">
            <ul className="pagination-list">
              <li><a className="pagination-link" aria-label="Goto first page" onClick={this.props.handleNavigationClick('first')}>&laquo;</a></li>
              {this.props.links.prev &&
                <li><a className="pagination-link" aria-label="Goto prev page" onClick={this.props.handleNavigationClick('prev')}>&lsaquo;</a></li>
              }
              {this.props.links.next &&
                <li><a className="pagination-link" aria-label="Goto next page" onClick={this.props.handleNavigationClick('next')}>&rsaquo;</a></li>
              }
              <li><a className="pagination-link" aria-label="Goto last page" onClick={this.props.handleNavigationClick('last')}>&raquo;</a></li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

export default TablePaginator;
