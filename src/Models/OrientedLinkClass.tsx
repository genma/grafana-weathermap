import { SelectableValue } from '@grafana/data';
import { EspaceCoordonneesClass } from './EspaceCoordonneesClass';
//import { PointClass } from './PointClass';
//import { EspaceCoordonneesClass } from './EspaceCoordonneesClass';


export class OrientedLinkClass {
	/**
	 * to do
	 */
	public id: number;

	/**
	 * to do
	 */
	public orientationLink: SelectableValue<string>;

	/**
	 * to do
	 */
	public pointAPositionX: string;

	/**
	 * to do
	 */
	public pointAPositionY: string;

	/**
	 * to do
	 */
	public colorCoordinateA: string;

	/**
	 * to do
	 */
	public pointBPositionX: string;

	/**
	 * to do
	 */
	public pointBPositionY: string;

	/**
	 * to do
	 */
	public colorCoordinateB: string;

	/**
	 * to do
	 */
	public labelLinkA: string;	
	
	/**
	 * to do
	 */
	public labelLinkB: string;
	/**
	 * to do
	 */
	public positionXLabelA: string;

	/**
	 * to do
	 */
	public positionYLabelA: string;
	
	/**
	 * to do
	 */
	public positionXLabelB: string;

	/**
	 * to do
	 */
	public positionYLabelB: string;

	/**
	 * to do
	 */
	public coordinateSpaceAssociatePointA: SelectableValue<EspaceCoordonneesClass>;	
	
	/**
	 * to do
	 */
	public coordinateSpaceAssociatePointB: SelectableValue<EspaceCoordonneesClass>;
	// /**
	//  * to do
	//  */
	// public typeOfWidthLink: boolean;

	// /**
	//  * to do
	//  */
	// public widthLink: string;


	constructor(
		id: number,
		orientationLink: SelectableValue<string>,
		pointAPositionX: string,
		pointAPositionY: string,
		colorCoordinateA: string,
		pointBPositionX: string,
		pointBPositionY: string,
		colorCoordinateB: string,
		labelLinkA: string,
		labelLinkB: string,
		positionXLabelA: string,
		positionYLabelA: string,
		positionXLabelB: string,
		positionYLabelB: string,
		coordinateSpaceAssociatePointA: SelectableValue<EspaceCoordonneesClass>,
		coordinateSpaceAssociatePointB: SelectableValue<EspaceCoordonneesClass>,
		// typeOfWidthLink: boolean,
		// widthLink: string,

	) {
		this.id = id;
		this.orientationLink = orientationLink;
		this.pointAPositionX = pointAPositionX;
		this.pointAPositionY = pointAPositionY;
		this.colorCoordinateA = colorCoordinateA;
		this.pointBPositionX = pointBPositionX;
		this.pointBPositionY = pointBPositionY;
		this.colorCoordinateB = colorCoordinateB;
		this.labelLinkA = labelLinkA;
		this.labelLinkB = labelLinkB;
		this.positionXLabelA = positionXLabelA;
		this.positionYLabelA = positionYLabelA;
		this.positionXLabelB = positionXLabelB;
		this.positionYLabelB = positionYLabelB;
		this.coordinateSpaceAssociatePointA = coordinateSpaceAssociatePointA;
		this.coordinateSpaceAssociatePointB = coordinateSpaceAssociatePointB;
		// this.typeOfWidthLink = typeOfWidthLink;
		// this.widthLink = widthLink;
	}

	/**
	 * id de l'objet Lien
	 */
	public getId(): number {
		return this.id;
	}

	/**
	 * id de l'objet Lien
	 */
	public setId(id: number) {
		this.id = id;
    }
	
	/**
	 * Extrémité par couple de coordonnée - Position X du Point A
	 */
	public getPointAPositionX() {
		return this.pointAPositionX;
	}

	/**
	 * Extrémité par couple de coordonnée - Position X du Point A
	 * @param pointAPositionX to do
	 */
	public setPointAPositionX(pointAPositionX: string) {
		this.pointAPositionX = pointAPositionX;
	}

	// /**
	//  * Retourne la manière dont on veut récupérer les deux extrémités du lien
	//  */
	// public getDefineHowToGetCoordonate() {
	// 	return this.defineHowToGetCoordonate;
	// }

	// /**
	//  * Modifie la manière dont on veut récupérer les deux extrémités du lien
	//  * @param defineHowToGetCoordonate
	//  */
	// public setDefineHowToGetCoordonate(defineHowToGetCoordonate: SelectableValue<string>) {
	// 	this.defineHowToGetCoordonate = defineHowToGetCoordonate;
	// }

	public getOrientationLink() {
		return this.orientationLink;
	}

	public setOrientationLink(orientationLink: SelectableValue<string>) {
		this.orientationLink = orientationLink;
	}

	/**
	 * Extrémité par couple de coordonnée - Position Y du Point A
	 */
	public getPointAPositionY() {
		return this.pointAPositionY;
	}

	/**
	 * Extrémité par couple de coordonnée - Position Y du Point A
	 * @param pointAPositionY
	 */
	public setPointAPositionY(pointAPositionY: string) {
		this.pointAPositionY = pointAPositionY;
	}

	/**
	 * retourne la couleur pour le lien de A vers B
	 */
	public getColorCoordinateA() {
		return this.colorCoordinateA;
	}

	/**
	 * modifie la couleur pour le lien de A vers B
	 * @param colorCoordinateA 
	 */
	public setColorCoordinateA(colorCoordinateA: string) {
		this.colorCoordinateA = colorCoordinateA;
	}	
	
	/**
	 * retourne la couleur pour le lien de B vers A
	 */
	public getColorCoordinateB() {
		return this.colorCoordinateB;
	}

	/**
	 * modifie la couleur pour le lien de B vers A
	 * @param colorCoordinateB 
	 */
	public setColorCoordinateB(colorCoordinateB: string) {
		this.colorCoordinateB = colorCoordinateB;
	}

	/**
	 * Extrémité par couple de coordonnée - Position X du Point B
	 */
	public getPointBPositionX() {
		return this.pointBPositionX;
	}

	/**
	 * Extrémité par couple de coordonnée - Position X du Point B
	 * @param pointBPositionX
	 */
	public setPointBPositionX(pointBPositionX: string) {
		this.pointBPositionX = pointBPositionX;
	}	
	
	/**
	 * Extrémité par couple de coordonnée - Position Y du Point B
	 */
	public getPointBPositionY() {
		return this.pointBPositionY;
	}

	/**
	 * Extrémité par couple de coordonnée - Position Y du Point B
	 * @param pointBPositionY
	 */
	public setPointBPositionY(pointBPositionY: string) {
		this.pointBPositionY = pointBPositionY;
	}

	public getLabelLinkA() {
		return this.labelLinkA;
	}

	public setLabelLinkA(labelLinkA: string) {
		this.labelLinkA = labelLinkA;
	}
	
	public getLabelLinkB() {
		return this.labelLinkB;
	}

	public setLabelLinkB(labelLinkB: string) {
		this.labelLinkB = labelLinkB;
	}

	public getPositionXLabelA() {
		return this.positionXLabelA;
	}

	public setPositionXLabelA(positionXLabelA: string) {
		this.positionXLabelA = positionXLabelA;
	}

	public getPositionYLabelA() {
		return this.positionYLabelA;
	}

	public setPositionYLabelA(positionYLabelA: string) {
		this.positionYLabelA = positionYLabelA;
	}
	
	public getPositionXLabelB() {
		return this.positionXLabelB;
	}

	public setPositionXLabelB(positionXLabelB: string) {
		this.positionXLabelB = positionXLabelB;
	}

	public getPositionYLabelB() {
		return this.positionYLabelB;
	}

	public setPositionYLabelB(positionYLabelB: string) {
		this.positionYLabelB = positionYLabelB;
	}

	public getCoordinateSpaceAssociatePointA() {
		return this.coordinateSpaceAssociatePointA;
	}

	public setCoordinateSpaceAssociatePointA(coordinateSpaceAssociatePointA: SelectableValue<EspaceCoordonneesClass>) {
		this.coordinateSpaceAssociatePointA = coordinateSpaceAssociatePointA;
	}

	public getCoordinateSpaceAssociatePointB() {
		return this.coordinateSpaceAssociatePointB;
	}

	public setCoordinateSpaceAssociatePointB(coordinateSpaceAssociatePointB: SelectableValue<EspaceCoordonneesClass>) {
		this.coordinateSpaceAssociatePointB = coordinateSpaceAssociatePointB;
	}
	// /**
	//  * Retourne le type de largeur du lien : fixe ou variable
	//  */
	// public getTypeOfWidthLink() {
	// 	return this.typeOfWidthLink;
	// }

	// /**
	//  * Modifie le type de largeur du lien : fixe ou variable
	//  * @param typeOfWidthLink 
	//  */
	// public setTypeOfWidthLink(typeOfWidthLink: boolean) {
	// 	this.typeOfWidthLink = typeOfWidthLink;
	// }

	// /**
	//  * Retourne la largeur du lien
	//  */
	// public getWidthLink() {
	// 	return this.widthLink;
	// }

	// /**
	//  * 
	//  * @param widthLink Modifie la largeur du lien
	//  */
	// public setWidthLink(widthLink: string) {
	// 	this.widthLink = widthLink;
	// }

}
