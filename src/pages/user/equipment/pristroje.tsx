import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import { EquipmentsStore } from '../../../stores/user/equipments';
import { Paginator } from '../../../pages/shared';
import { ILocalization } from '../../../services/Localization/index';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
@observer
export class Equipment extends React.Component<{}, {}>
{
    public store: EquipmentsStore;
    public locale: ILocalization;
    constructor(props:any){
        super(props);
        this.store=new EquipmentsStore();
    }
    componentDidMount() {
        this.store.getAll();
    }

    renderEquipments = () => {
        return this.store.pagination.CurrentPageItems.map((q, i) =>
            <TableRow>
                <TableRowColumn>{q.startDate}</TableRowColumn>
                <TableRowColumn>
                    {(q.type == 'Local' || q.type == 'local') && <Link onClick={() => this.store.selectedEquipment = q} to={`/dashboard/equipment/edit/${q.equipmentId}`}>{q.buisnessName}</Link>}
                    {(q.type == 'Intuo' || q.type == 'intuo') && <Link onClick={() => this.store.selectedEquipment = q} to={`/dashboard/equipment/view/${q.equipmentId}`}>{q.buisnessName}</Link>}
                </TableRowColumn>
                <TableRowColumn>{q.serialNumber}</TableRowColumn>
                <TableRowColumn>{q.riskClass}</TableRowColumn>
                <TableRowColumn>{q.producer}</TableRowColumn>
                <TableRowColumn>{q.servisContact}</TableRowColumn>
            </TableRow>
        )
    }

    render() {
        return (
            <Paper  style={{  display: 'flex', flexDirection: 'column', overflow:'hidden' }}>

                      <div style={{display:'flex', alignItems:'flex-end'}}>
                          <IconButton >
                              <Link to="/dashboard/equipment/add"> <FloatingActionButton mini={true} ><ContentAdd /></FloatingActionButton></Link>
                          </IconButton>
                      </div>

                <Table  style={{   overflow:'hidden' }} selectable={false}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>
                                <div>Datum uvedení ZP do provozu</div>
                                {/* <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <IconButton onClick={() => this.store.sortByMode(SortMode.startdateAsc)} iconClassName="material-icons" iconStyle={{ color: palette.palette.primary1Color }} >arrow_upward</IconButton>
                                    <IconButton onClick={() => this.store.sortByMode(SortMode.startdateDesc)} iconClassName="material-icons" iconStyle={{ color: palette.palette.accent1Color }} >arrow_downward</IconButton>
                                </div> */}
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                <div>Obchodní název ZP</div>
                                {/* <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.primary1Color }} >arrow_upward</IconButton>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.accent1Color }} >arrow_downward</IconButton>
                                </div> */}
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                <div>Výrobní číslo</div>
                                {/* <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.primary1Color }} >arrow_upward</IconButton>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.accent1Color }} >arrow_downward</IconButton>
                                </div> */}
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                <div>Riziková třída ZP</div>
                                {/* <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.primary1Color }} >arrow_upward</IconButton>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.accent1Color }} >arrow_downward</IconButton>
                                </div> */}
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                <div>Výrobce/Dodavatel</div>
                                {/* <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.primary1Color }} >arrow_upward</IconButton>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.accent1Color }} >arrow_downward</IconButton>
                                </div> */}
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                <div>Kontakt na servis</div>
                                {/* <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.primary1Color }} >arrow_upward</IconButton>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.accent1Color }} >arrow_downward</IconButton>
                                </div> */}
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                <div>Typ</div>
                                {/* <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.primary1Color }} >arrow_upward</IconButton>
                                    <IconButton iconClassName="material-icons" iconStyle={{ color: palette.palette.accent1Color }} >arrow_downward</IconButton>
                                </div> */}
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.renderEquipments()}
                    </TableBody>
                    <TableFooter>
                        <Paginator Paginator={this.store.pagination} LoadItems={this.store.getAll} />
                    </TableFooter>
                </Table>
            </Paper>
        );
    }
}