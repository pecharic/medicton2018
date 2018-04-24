import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import { observer } from 'mobx-react';
import FontIcon from 'material-ui/FontIcon';

@observer
export class Paginator extends React.Component<any,{}>
{
    constructor(props:any){
        super(props);
    }
    render()
    {
        return (
            <div style={{display:'flex', alignItems:'center'}}>
                <div style={{flexGrow:1}}></div>
                <IconButton onClick={()=>this.props.LoadItems(1)} disabled={this.props.Paginator.CanGoToFirstPage == false}><FontIcon className="material-icons-first_page" ></FontIcon></IconButton>
                <IconButton onClick={()=>this.props.LoadItems(this.props.Paginator.CurrentPage - 1)} disabled={this.props.Paginator.CanGoToPreviousPage == false}><FontIcon className="material-icons" >keyboard_arrow_left</FontIcon></IconButton>
                <IconButton onClick={()=>this.props.LoadItems(this.props.Paginator.CurrentPage + 1)} disabled={this.props.Paginator.CanGoToNextPage == false}><FontIcon className="material-icons" >keyboard_arrow_right</FontIcon></IconButton>
                <IconButton onClick={()=>this.props.LoadItems(this.props.Paginator.TotalPages)} disabled={this.props.Paginator.CanGoToLastPage == false}><FontIcon className="material-icons">last_page</FontIcon></IconButton>
            </div>
        )
    }
}