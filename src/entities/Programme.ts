import { Step } from "./Step";


export class Programme{

    private _name:string;
    private _steps:Step[];


    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter steps
     * @return {Step[]}
     */
	public get steps(): Step[] {
		return this._steps;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter steps
     * @param {Step[]} value
     */
	public set steps(value: Step[]) {
		this._steps = value;
	}
    


}