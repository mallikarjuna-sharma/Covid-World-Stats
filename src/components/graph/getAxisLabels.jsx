
import stringConstants from '../stringConstants.jsx'

export function getXaxisLabels(sortType) {
    switch (sortType) {
        case 'india_district':
            return stringConstants.X_AXIS_LABELS_INDIA_DISTRICT;
        case 'india_state':
            return stringConstants.X_AXIS_LABELS_INDIA_STATE;
        case 'world_country':
            return stringConstants.X_AXIS_LABELS_WORLD_COUNTRY;
        case 'world_stats':
            return stringConstants.X_AXIS_LABELS_WORLD_STATS;
        default:
            return ['No Match']
    }

}

export function getYaxisLabels(sortType) {
    switch (sortType) {
        case 'india_district':
            return stringConstants.Y_AYIS_LABELS_INDIA_DISTRICT;
        case 'india_state':
            return stringConstants.Y_AYIS_LABELS_INDIA_STATE;
        case 'world_country':
            return stringConstants.Y_AYIS_LABELS_WORLD_COUNTRY;
        case 'world_stats':
            return stringConstants.Y_AXIS_LABELS_WORLD_STATS;
        default:
            return ['No Match']
    }

}