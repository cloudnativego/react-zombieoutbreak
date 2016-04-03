import React from 'react';

export default class OutbreakReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    }

    return this.renderOutbreakReport();
  }

  renderEdit = () => {
    return (
        <div>
          <div className="date">{this.props.outbreak.date}</div>
          <div className="origin">{this.props.outbreak.origin}</div>
          <div><br/></div>
          <div className="severity">{this.props.outbreak.severity}</div>
          <div className="description">
            <input type="text"
                ref={
                    (e) => e ? e.selectionStart = this.props.outbreak.description.length : null
                  }
                  autoFocus={true}
                  defaultValue={this.props.outbreak.description}
                  onBlur={this.finishEdit}
                  onKeyPress={this.checkEnter} />
          </div>
        </div>
      );
  }

  edit = () => {    
    this.setState({
      editing: true
    });
  };

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    const value = e.target.value;
    if(this.props.onEdit) {
      this.props.onEdit(value);

      this.setState({
        editing: false
      });
    }
  }

  renderOutbreakReport = () => {
    const onDelete = this.props.onDelete;

    return (
      <div>
        <div className="date">{this.props.outbreak.date}</div>
        <div className="origin">{this.props.outbreak.origin}</div>
        <div><br/></div>
        <div className="severity">{this.props.outbreak.severity}</div>
        <div className="description" onClick={this.edit}>{this.props.outbreak.description}</div>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
  }

  renderDelete = () => {
    return <button
      className="delete-outbreak" onClick={this.props.onDelete}>X</button>;
  }
}
