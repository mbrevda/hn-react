import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import ParentItem from 'src/containers/ParentItem.js'
import {WindowScroller, AutoSizer, List} from 'react-virtualized'
import fetchCache from 'src/fetchCache.js'
import Loading from 'src/components/Loading.js'

const styles = theme => ({
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

class ParentItems extends Component {
  constructor() {
    super()
    this.state = {items: [], status: 'loading'}
  }

  componentDidMount() {
    fetchCache('https://hacker-news.firebaseio.com/v0/topstories.json').then(
      data => {
        this.setState({
          status: 'loaded',
          items: data
        })
      }
    )
  }

  render() {
    if (this.state.status == 'loading') return <Loading />
    return (
      <WindowScroller>
        {({height, isScrolling, onChildScroll, scrollTop}) => (
          <AutoSizer disableHeight>
            {({width}) => (
              <List
                autoHeight
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                overscanRowCount={3}
                rowCount={this.state.items.length}
                rowHeight={128}
                rowRenderer={props => (
                  <div style={props.style} key={props.key}>
                    <ParentItem id={this.state.items[props.index]} {...props} />
                  </div>
                )}
                scrollTop={scrollTop}
                width={width}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    )
  }
}

ParentItems.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(ParentItems)
