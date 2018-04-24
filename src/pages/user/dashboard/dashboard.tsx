import * as React from 'react';
import {Card,CardHeader,CardText} from 'material-ui/Card';
import {observer} from 'mobx-react';
import { DashboardStore } from '../../../stores/user/dashboardStore';


@observer
export class Dashboard extends React.Component<{},{}>
{
    private store: DashboardStore;

    constructor(props:any)
    {
        super(props);
        this.store=new DashboardStore();
    }

    componentDidMount()
    {
        this.store.getAnnouncments(1);
    }

    renderAnnouncements = () =>
    {
        return this.store.Announcements.map((q,i)=>
            <Card key={i}  style={{marginBottom:'20px'}}>
                <CardHeader title={q.title} subtitle={q.date}/>
                <CardText>{q.text}</CardText>
            </Card>)
    }

    render()
    {

        return(
            <div style={{display:'flex',flexDirection:'row'}}>

                <div style={{width:'70%'}}>
                    {this.renderAnnouncements()}

                </div>
            </div>
        );
    }
}