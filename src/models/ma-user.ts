export class MaUser {
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    private _first_name: string;
    public get first_name(): string {
        return this._first_name;
    }
    public set first_name(value: string) {
        this._first_name = value;
    }
    private _last_name: string;
    public get last_name(): string {
        return this._last_name;
    }
    public set last_name(value: string) {
        this._last_name = value;
    }
    private _avatar: string;
    public get avatar(): string {
        return this._avatar;
    }
    public set avatar(value: string) {
        this._avatar = value;
    }
}
