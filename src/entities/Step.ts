

export class Step {
    private _number: number;
    private _name: string;
    private _image: string;
    private _step: string;


    /**
     * Getter number
     * @return {number}
     */
	public get number(): number {
		return this._number;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter image
     * @return {string}
     */
	public get image(): string {
		return this._image;
	}

    /**
     * Getter step
     * @return {string}
     */
	public get step(): string {
		return this._step;
	}

    /**
     * Setter number
     * @param {number} value
     */
	public set number(value: number) {
		this._number = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter image
     * @param {string} value
     */
	public set image(value: string) {
		this._image = value;
	}

    /**
     * Setter step
     * @param {string} value
     */
	public set step(value: string) {
		this._step = value;
	}
    

}