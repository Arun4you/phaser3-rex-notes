import Quad from 'rexPlugins/utils/grid/quad/Quad.js';
import GetNeighborTileX from 'rexPlugins/utils/grid/quad/GetNeighborTileX.js';
import GetNeighborTileY from 'rexPlugins/utils/grid/quad/GetNeighborTileY.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class QuadGrid extends Quad {
    constructor(config) {
        super(config);
    }

    resetFromJSON(o) {
        super.resetFromJSON(o);
        this.setDirectionMode(GetValue(o, 'dir', 4));
    }

    setDirectionMode(mode) {
        if (typeof (mode) === 'string') {
            mode = DIRMODE[mode];
        }

        this.directions = mode;
        return this;
    }

    get allDirections() {
        return (this.directions === 4) ? ALLDIR4 : ALLDIR8;
    }
    
    // board-match
    get halfDirections() {
        return (this.directions === 4) ? HALFDIR4 : HALFDIR8;
    }

    // getWorldX
    // getWorldY
    // getTileX
    // getTileY    
}

const ALLDIR4 = [0, 1, 2, 3];
const ALLDIR8 = [0, 1, 2, 3, 4, 5, 6, 7];
const HALFDIR4 = [0, 1];
const HALFDIR8 = [0, 1, 4, 5];

var methods = {
    getNeighborTileX: GetNeighborTileX,
    getNeighborTileY: GetNeighborTileY,
}
Object.assign(
    QuadGrid.prototype,
    methods
);

const DIRMODE = {
    '4dir': 4,
    '8dir': 8
}

export default QuadGrid;