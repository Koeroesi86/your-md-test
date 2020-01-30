export const RECEIVE_CONDITIONS = 'RECEIVE_CONDITIONS';

export function receiveConditions(conditions) {
    return {
        type: RECEIVE_CONDITIONS,
        payload: { conditions }
    }
}
