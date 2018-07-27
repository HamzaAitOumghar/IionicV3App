

export class Proteine {

    private _name: string;
    private _description: string;
    private _image: string;
    private _rating: number;
    private _prix: string;



    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter image
     * @return {string}
     */
	public get image(): string {
		return this._image;
	}

    /**
     * Getter rating
     * @return {number}
     */
	public get rating(): number {
		return this._rating;
	}

    /**
     * Getter prix
     * @return {string}
     */
	public get prix(): string {
		return this._prix;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter image
     * @param {string} value
     */
	public set image(value: string) {
		this._image = value;
	}

    /**
     * Setter rating
     * @param {number} value
     */
	public set rating(value: number) {
		this._rating = value;
	}

    /**
     * Setter prix
     * @param {string} value
     */
	public set prix(value: string) {
		this._prix = value;
	}

   
}