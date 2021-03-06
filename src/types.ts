import { SelectableValue } from '@grafana/data';
import { EspaceCoordonneesClass } from './Models/EspaceCoordonneesClass';
import { EspaceCoordonneesExtendClass } from './Models/EspaceCoordonneesExtendClass';
import { Seuil } from './Models/seuil';
import { ParametrageMetrique } from './Models/parametrageMetrique';
import { TextObject } from 'Models/TextObject';
import { PointClass } from 'Models/PointClass';
import { LinkClass } from 'Models/LinkClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';

/**
 * interface to save parametrageMetriquePrincipale
 */
export interface IParametrage {
	/**
	 * parametrage metric
	 */
	parametrageMetrique: ParametrageMetrique;
}

/**
 * interface to save texte settings (police, size, style)
 */
export interface ITexteSettings {
	/**
	 * police simple panel
	 */
	police: string;

	/**
	 * size simple panel
	 */
	taille: string;

	/**
	 * style simple panel
	 */
	styleText: string;
}

export interface IMetricSettings {
	/**
	 * fond is active (color)
	 */
	fondIsActive: boolean;
	/**
	 * contour is active
	 */
	contourIsActive: boolean;
	/**
	 * seuil for variable color
	 */
	seuil: Seuil[];
	/**
	 * color mode for parametresGeneriques
	 */
	colorMode: boolean;
}


export interface MetricQuery {
	__name__: string,
	job: string,
	instance: string
}

export interface ResultQuery {
	metric: Array<MetricQuery>,
	value: Array<any>
}

export interface DataQuery {
	resultType: string,
	result: ResultQuery,
}

export interface ReturnQuery {
	status: string,
	data: DataQuery
}

export interface Target {
	expr: string;
	refId?: string;
}

export interface TimeRange {
	from: string;
	to: string;
}

/**
 * Stock the values between SimpleEditor and SimplePanel
 */
// tslint:disable-next-line:interface-name
export interface SimpleOptions extends IParametrage,
	ITexteSettings, IMetricSettings {
	/**
	 * to do
	 */
	imageUrl: string;

	/**
	 * Espace de visualisation initial
	 */
	arrayEspaceVisualisationInitial: EspaceCoordonneesClass;

	/**
	 * Espace de coordonnees
	 */
	arrayEspaceCoordonnees: EspaceCoordonneesExtendClass[];

	/**
	 * Liste des points générés depuis l'onglet Point
	 */
	arrayPoints: PointClass[];

	/**
	 * Liste des liens générés depuis l'onglet Link
	 */
	arrayLinks: LinkClass[];

	/**
	 * Liste des liens orientés générés depuis l'onglet OrientedLink
	 */
	arrayOrientedLinks: OrientedLinkClass[];

	/** value TextObjects component */
	valueTextObject: TextObject;

	/**
	 *Encore actuel ? a test
	 */
	info: string;
	/**
	 * Raw format of dashboard's json
	 */
	contentJson: string;
	/**
	 * Object format of dashboard's json
	 */
	Json: any;
	/**
	 * Id of dashboard
	 */
	Id: number;
	/**
	 * Uid of dashboard
	 */
	uid: string;
	/**
	 * Title of dashboard
	 */
	title: string;
	/**
	 * Style of dashboard
	 */
	style: string;
	/**
	 * True of false is the dashboard is editable
	 */
	editable: string;
	/**
	 * Version number of the dashboard
	 */
	version: number;
	/**
	 * Refresh time that is picked
	 */
	refresh: SelectableValue<string>;
	/**
	 * Shemas version number of the dashboard
	 */
	shemaVersion: number;
	/**
	 * Timezone of the dashboard
	 */
	timezone: string;
	/**
	 * Actual panel selected in "Time selector display"
	 */
	actualPanel: SelectableValue<string>;
	/**
	 * List of panel selectable in the dashboard
	 */
	panelList: Array<SelectableValue<string>>;
	/**
	 * Id of the selected panel
	 */
	panelId: number;
	/**
	 * Type of the selected panel
	 */
	panelType: string;
	/**
	 * List of targets in the selected panel
	 */
	panelTargets: Array<Target>;
	/**
	 * List of targets loaded for fetch data
	 */
	promTargets: Array<Target>;
	/**
	 * List of target load at init for fetch data
	 */
	promGlobalTargets: Array<Target>;
	/**
	 * Time range selected for fetch data
	 */
	timeRange: TimeRange;
	/**
	 * Input of editable target
	 */
	personalTarget: Target;
	/**
	 * Time instant selected for fetch data
	 */
	timeQuery: string;
	/**
	 * Input of prometheus server url
	 */
	promUrl: string;
	/**
	 * List of query that will be send to the server
	 */
	queryProm: Array<string>;
	/**
	 * List of iniot query that will be send to the server
	 */
	queryPromGlobal: Array<string>;
	/**
	 * List of range query that will be send to the server
	 */
	queryPromRange: Array<string>;
	/**
	 * List of time that can be picked in "Time selector display"
	 */
	listStep: Array<SelectableValue<string>>;
	/**
	 * Return of the prometheus's API call
	 */
	jsonQueryReturn: Array<ReturnQuery>;
	/**
	 * Return of the init prometheus's API call
	 */
	jsonGlobalQueryReturn: Array<ReturnQuery>;
	/**
	 * TODO
	 */
	mainTarget: Target;
	/**
	 * TODO
	 */
	mainQueryProm: string;
	/**
	 * TODO
	 */
	mainQueryReturn: ReturnQuery;
	coordinatesFromClick: [
		{
			id: number,
		},
		{
			x: number,
			y: number,
		},
		{
			x: number,
			y: number,
		}
	];
	indexOrientedLink: number,
}

export const defaults: SimpleOptions = {
	imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/be/Locator_Grid.png',
	arrayEspaceVisualisationInitial: new EspaceCoordonneesClass(0, '0', '0', '0', '0', ''),
	arrayEspaceCoordonnees: [],
	arrayPoints: [],
	arrayLinks: [],
	arrayOrientedLinks: [],
	police: 'Helvetica',
	taille: '1em',
	styleText: 'normal',
	fondIsActive: true,
	contourIsActive: true,
	seuil: [],
	colorMode: true,
	parametrageMetrique: new ParametrageMetrique('', '', ''),
	valueTextObject: new TextObject('', '', '', 'rgb(0, 0, 0, 0)', 'black', '', '',
		'', '', false, '', '', '', false, false, false, '', false, ''),

	info: 'Information sur votre panel',
	contentJson: 'contenu du dashboard',
	Id: 0,
	uid: '',
	title: '',
	style: '',
	editable: '',
	version: 0,
	refresh: { value: '0', label: '0' },
	shemaVersion: 0,
	timezone: '',
	actualPanel: { value: '0', label: '0' },
	panelList: [
		{ value: '0', label: '0' }
	],
	panelId: 0,
	panelType: '',
	panelTargets: [],
	promTargets: [],
	promGlobalTargets: [],
	Json: {},
	timeRange: { from: '2020-01-02 00:00:00', to: '2020-01-02 00:00:00' },
	personalTarget: { expr: "" },
	timeQuery: '2020-01-02 00:00:00',
	promUrl: 'http://localhost:9090/api/v1/',
	queryProm: [],
	queryPromGlobal: [],
	queryPromRange: [],
	listStep: [
		{ value: '0', label: '0' },
	],
	jsonQueryReturn: [],
	jsonGlobalQueryReturn: [],
	mainTarget: { expr: '' },
	mainQueryProm: '',
	mainQueryReturn: {
		status: '', data: {
			resultType: '', result: {
				metric: [{
					__name__: '',
					job: '',
					instance: '',
				}],
				value: [],
			},
		},
	},
	coordinatesFromClick: [
		{
			id: 0,
		},
		{
			x: 0,
			y: 0,
		},
		{
			x: 0,
			y: 0,
		}
	],
	indexOrientedLink: 0,
};
