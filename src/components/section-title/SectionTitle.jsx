import React, { PureComponent } from 'react'
import ContentTitle from './style'
export class SectionTitle extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ContentTitle>
        <div className="content-title-left">
          <div className="hot">
            <div className="hot-left">HOT</div>
            <div className="hot-right"></div>
          </div>
          <div className="txt">
            <div className="txt-top">{this.props.title}</div>
            <div className="txt-bottom"></div>
          </div>
        </div>
      </ContentTitle>
    )
  }
}

SectionTitle.defaultProps = {
  title: '12333'
}
export default SectionTitle
