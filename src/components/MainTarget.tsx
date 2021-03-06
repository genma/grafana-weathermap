import React from 'react';
import { SimpleOptions, Target } from '../types';
import { PanelEditorProps } from '@grafana/data';
import { FormField } from '@grafana/ui';
import { Button } from '@grafana/ui';

interface IProps extends PanelEditorProps<SimpleOptions> { }


/**
 * def
 */
class MainTarget extends React.Component<IProps>{
    constructor(props: IProps) {
        super(props);
	}
	
	onMainTargetChanged = (event: { currentTarget: HTMLInputElement }) => {
		let newData : Target = {expr: ""};
		newData.expr = event.currentTarget.value;
		this.props.onOptionsChange({ ...this.props.options, mainTarget: newData });
	};

	makeQuery = () => {
		this.props.options.queryProm = [];
		let dateStamp = Date.parse(this.props.options.timeQuery).toString();
		dateStamp = dateStamp.substring(0, dateStamp.length - 3);
		this.props.options.mainQueryProm = this.props.options.promUrl + "query?query=" + this.props.options.mainTarget.expr + "&time=" + dateStamp;
		console.log(this.props.options.mainQueryProm);
	}

	fetchMainQuerry = () => {
		this.makeQuery();
		fetch(this.props.options.mainQueryProm)
		.then(response => response.json())
		.then((result) => {
			console.log(result);
			this.props.options.mainQueryReturn = result;
		})
		.catch((error) => {
			console.log(error)
		});
		console.log(this.props.options.mainQueryReturn);
		this.props.onOptionsChange({ ...this.props.options, mainQueryReturn: this.props.options.mainQueryReturn });
	}

	/**
	 * result
	 */
	public render() {

    const {options} = this.props;
		return (
			<div className="section gf-form-group">
				<FormField label="target metric" labelWidth={10}
					inputWidth={20} onChange={this.onMainTargetChanged.bind(this)} type="string" value={options.mainTarget.expr || ''} />
				<Button key="ButtonFetchInstant" onClick={this.fetchMainQuerry}>fetch instant</Button>
			</div>				
		);
	}
}
export default MainTarget;

