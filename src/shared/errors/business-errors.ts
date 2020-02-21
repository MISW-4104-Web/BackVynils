export function BusinnesLogicException(message, type) {
    this.message = message;
    this.type = type;
}

export enum BusinessError {
    NOT_FOUND,
    PRECONDITION_FAILED
}