import React from 'react';
import { SimpleOptions, Target } from '../types';
import { PanelEditorProps, SelectableValue } from '@grafana/data';
import { FormField } from '@grafana/ui';
import { InputSelect } from '../inputSelect';
import { Button } from '@grafana/ui';

interface IProps extends PanelEditorProps<SimpleOptions> { }


/**
 * def
 */
class PanelData extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	/**
	 * TODO
	 */
	onPanelSelectChanged = (value: SelectableValue<string>) => {
		let panel = this.getPanelInfo(value.label)
		let newTargets = this.getTargetsInfo(value.label);
		this.props.onOptionsChange({ ...this.props.options, actualPanel: value, panelId: panel.id, panelType: panel.type, panelTargets: newTargets });
	};

	/**
	 * TODO
	 */
	onPanelIdChanged = (value: any) => {
		this.props.onOptionsChange({ ...this.props.options, panelId: value });
	};

	/**
	 * TODO
	 */
	onPanelTypeChanged = (value: any) => {
		this.props.onOptionsChange({ ...this.props.options, panelType: value });
	};

	/**
	 * TODO
	 */
	getPanelInfo(value: any) {
		let objectJSON = this.props.options.Json
		return objectJSON.panels.find((c: any) => c.title === value)
	}

	/**
	 * TODO
	 */
	getTargetsInfo(value: any) {
		this.props.options.panelTargets = [];
		let targets: Array<Target> = this.getPanelInfo(value).targets;
		return targets;
	}

	/**
	 * TODO
	 */
	onTargetChanged = (event: { currentTarget: HTMLInputElement }) => {
		const newData = this.props.options.panelTargets.slice();
		newData[parseInt(event.currentTarget.id, 10)].expr = event.currentTarget.value;
		this.props.onOptionsChange({ ...this.props.options, panelTargets: newData });
	};

	/**
	 * TODO
	 */
	onTargetPromChanged = (event: { currentTarget: HTMLInputElement }) => {
		const newData = this.props.options.promTargets.slice();
		newData[parseInt(event.currentTarget.id, 10)].expr = event.currentTarget.value;
		this.props.onOptionsChange({ ...this.props.options, promTargets: newData });
	};

	/**
	 * TODO
	 */
	onPersonalTargetChanged = (event: { currentTarget: HTMLInputElement }) => {
		let newData: Target = { expr: "" };
		newData.expr = event.currentTarget.value;
		this.props.onOptionsChange({ ...this.props.options, personalTarget: newData });
	};

	/**
	 * TODO
	 */
	loadTarget = (onClick: { currentTarget: HTMLButtonElement }) => {
		console.log(onClick.currentTarget.id);
		const newTarget = this.props.options.panelTargets[parseInt(onClick.currentTarget.id)];
		console.log(newTarget);
		this.props.options.promTargets.push(newTarget);
		this.props.onOptionsChange({ ...this.props.options, promTargets: this.props.options.promTargets });
	}

	/**
	 * TODO
	 */
	loadPersonalTarget = (onClick: { currentTarget: HTMLButtonElement }) => {
		this.props.options.promTargets.push(this.props.options.personalTarget);
		this.props.onOptionsChange({ ...this.props.options, promTargets: this.props.options.promTargets });
	}

	/**
	 * TODO
	 */
	deleteTarget = (onClick: { currentTarget: HTMLButtonElement }) => {
		const isTarget = (target: Target) => target.expr === this.props.options.panelTargets[parseInt(onClick.currentTarget.id)].expr;
		this.props.options.promTargets.splice(this.props.options.promTargets.findIndex(isTarget), 1);
		console.log(this.props.options.promTargets);
		this.props.onOptionsChange({ ...this.props.options, promTargets: this.props.options.promTargets });
	}

	/**
	 * TODO
	 */
	deleteTargetProm = (onClick: { currentTarget: HTMLButtonElement }) => {
		const isTarget = (target: Target) => target.expr === this.props.options.promTargets[parseInt(onClick.currentTarget.id)].expr;
		this.props.options.promTargets.splice(this.props.options.promTargets.findIndex(isTarget), 1);
		this.props.onOptionsChange({ ...this.props.options, promTargets: this.props.options.promTargets });
		console.log(this.props.options.promTargets);
	}

	/**
	 * TODO
	 */
	targetsData = (props: any): JSX.Element => {
		if (props.targets.lenght != 0) {
			let listTargets = props.targets.map((target: Target, index: number) =>
				<div key={"TargetDataDiv" + index.toString()}>
					<FormField id={index.toString()} key={"TargetData" + index.toString() + target.refId} label={"target " + target.refId} labelWidth={5}
						inputWidth={20} onChange={this.onTargetChanged.bind(this)} type="string" value={target.expr || ''} />
					<Button id={index.toString()} key={"buttonAdd" + index.toString()} onClick={this.loadTarget.bind(this)}>Add Target</Button>
				</div>

			);
			return (
				<div>{listTargets}</div>
			)
		}
		return (<div>No targets avalaible</div>);
	}

	/**
	 * TODO
	 */
	targetsProm = (props: any): JSX.Element => {
		if (props.targets.lenght != 0) {
			let listTargets = props.targets.map((target: Target, index: number) =>
				<div key={"TargetPromDiv" + index.toString()}>
					<FormField id={index.toString()} key={"TargetProm" + index.toString() + target.refId} label={"target " + target.refId} labelWidth={5}
						inputWidth={20} onChange={this.onTargetPromChanged.bind(this)} type="string" value={target.expr || ''} />
					<Button variant="danger" id={index.toString()} key={"ButtunDel" + index.toString()} onClick={this.deleteTargetProm.bind(this)}>Del Target</Button>
				</div>
			);
			return (
				<div>{listTargets}</div>
			)
		}
		return (<div>No targets avalaible</div>);
	}

	/**
	 * result
	 */
	public render() {
		const { options } = this.props;
		return (
			<div>
				<div className="section gf-form-group">
					<InputSelect
						_onChange={this.onPanelSelectChanged}
						data={options.panelList}
						defaultValue={options.actualPanel}
					/>
					<this.targetsData targets={options.panelTargets} />
				</div>
				<div className="section gf-form-group">
					<FormField label="target metric" labelWidth={10} key={"TargetPersonalMetric"}
						inputWidth={20} onChange={this.onPersonalTargetChanged.bind(this)} type="string" value={options.personalTarget.expr || ''} />
					<Button key={"ParsonalTargetAddButton"} onClick={this.loadPersonalTarget}>Add Target</Button>
				</div>
				<div className="section gf-form-group">
					<this.targetsProm targets={options.promTargets} />
				</div>
			</div>
		);
	}
}
export default PanelData;
