import React from 'react';
import BedCountField from './Date_find';
import './App.css';
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

class BedTypeAndCountField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: false,
            activeBedType: false,
            bedCounters: [0, 0],
            bedCount:'',
            bedType:'',
            selectValues:[]

        }
    }

    toggleFields() {
        this.setState({opened: !this.state.opened});
    }


handleBedTypeCountChange(type, count) {










}

    setActiveBedType(newBedType) {
        this.setState({activeBedType: newBedType, opened: false});

        if (this.props.onChange) {
            let bedCount = this.state.bedCounters[newBedType];
            this.props.onChange(newBedType, bedCount);
        }
    }

    handleBedCountChange(fieldIndex, newBedCount) {
        let updatedBedCounters = this.state.bedCounters;
        updatedBedCounters[fieldIndex] = newBedCount;
        this.setState({bedCounters: updatedBedCounters});



this.state.selectValues[fieldIndex] = {newBedCount, fieldIndex};
this.setState({selectValues:this.state.selectValues});
console.log(this.state.selectValues);


        if (this.props.onChange) {
            this.props.onChange(fieldIndex, newBedCount);
        }
    }

    render() {
        let menuClass = "dropdown-menu " + (this.state.opened ? '' : 'ae-hide');
        let activeBedCount = this.state.activeBedType !== false
            ? this.state.bedCounters[this.state.activeBedType]
            : false;


let iconClass = "icon col-lg-6 " + this.props.iconClass;
        return (<div class="dropdown-wrapper" >
            <div class="ae-dropdown dropdown" onClick={this.toggleFields.bind(this)}>
                <div class="ae-select">
<span class="ae-select-content">
<BedCountField onBedCountChange={this.handleBedCountChange.bind(this, this.state.activeBedType)} bedCount={activeBedCount}/>
                                </span>                

 {!this.state.opened && <i class="down-icon">&#8964;</i>}
                    {this.state.opened && <i class="up-icon">&#8963;</i>}
                </div>
                <ul class={menuClass} >
                  <li className={this.state.activeBedType === 0 ? 'selected' : ''} style={{'display':'flex'}}>
             <div class="icon col-lg-4 one"></div>

            

                        <a style={{'display':'flex'}}>
                       
                            <BedCountField
                                onFieldSelected={this.setActiveBedType.bind(this, 0)}
                               onBedCountChange={this.handleBedCountChange.bind(this, 0)}
                                bedCount={this.state.bedCounters[0]} iconClass="one"
                            />
                        </a>
                    </li>
                   
                  


                    <li className={this.state.activeBedType === 1 ? 'selected' : ''} style={{'display':'flex'}}>
                              <div class="icon col-lg-4 one"></div>     

      
                        <a>

                            <BedCountField
                                onFieldSelected={this.setActiveBedType.bind(this, 1)}
                                onBedCountChange={this.handleBedCountChange.bind(this, 1)}
                                bedCount={this.state.bedCounters[1]} iconClass="two"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>);
    }
}

export default BedTypeAndCountField;