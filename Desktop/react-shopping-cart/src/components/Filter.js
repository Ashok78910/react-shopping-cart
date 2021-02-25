import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className = "filter">
              <div className = "filter-result">{this.props.count} Products</div>
              <div className = "filter-sort">order 
              <select value = {this.props.sort} onChange = {this.props.sortproducts}>
                  <option>Latest</option>
                  <option value = 'lowest'>Lowest</option>
                  <option value = 'highest'>Highest</option>
              </select></div>
              <div className = 'filter-size'>Filter
              <select value = {this.props.size} onChange = {this.props.filterproducts}>
              <option value = "All">All</option>
              <option value = "m">m</option>
              <option value = "l">l</option>
              <option value = "xl">xl</option>
              <option value = "xxl">xxl</option>
              <option value = "s">s</option>
              </select>
              </div>
              </div>
        )
    }
}
