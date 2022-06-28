class CollidableObject extends MovableObject{

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    isColliding(mo) {
        return this.isIntersectingX(mo) && this.isIntersectingY(mo);
    }

    isIntersectingX(mo) {
        return !(this.isLeftSide(mo) || this.isRightSide(mo));
    }

    isIntersectingY(mo) {
        return !(this.isAbove(mo) || this.isBelow(mo));
    }

    isLeftSide(mo) {
        return !(this.getRightPos() > mo.getLeftPos());
    }

    isRightSide(mo) {
        return !(this.getLeftPos() < mo.getRightPos());
    }

    isAbove(mo) {
        return !(this.getBottomPos() > mo.getTopPos());
    }

    isBelow(mo) {
        return !(this.getTopPos() < mo.getBottomPos());
    }

    getRightPos() {
        return this.x + this.width - this.offset.right;
    }

    getLeftPos() {
        return this.x + this.offset.left;
    }

    getBottomPos() {
        return this.y + this.height;
    }

    getTopPos() {
        return this.y + this.offset.top;
    }
}
