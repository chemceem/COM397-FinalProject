/// <reference path="../box2d.ts" />
/// <reference path="../config.ts" />
var objects;
(function (objects) {
    var Platform = (function () {
        function Platform(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.createFixtureDefinition();
            this.createBodyDefinition();
            this.createPlatform();
        }
        Platform.prototype.createFixtureDefinition = function () {
            this.fixDef = new box2d.b2FixtureDef();
            this.fixDef.density = 1.0;
            this.fixDef.friction = 0.5; // Add some Resistance
            this.fixDef.restitution = 0.2; // Add a little bounce
            // Define the shape, which will be a Polygon
            this.fixDefShape = new box2d.b2PolygonShape();
            this.fixDefShape.SetAsBox(this.width * 0.5, this.height * 0.5);
            this.fixDef.shape = this.fixDefShape;
        };
        Platform.prototype.createBodyDefinition = function () {
            this.bodyDef = new box2d.b2BodyDef();
            this.bodyDef.type = box2d.b2Body.b2_staticBody;
            this.bodyDef.position.x = this.x;
            this.bodyDef.position.y = this.y;
        };
        Platform.prototype.createPlatform = function () {
            var position;
            // Add platform to world
            this.body = world.CreateBody(this.bodyDef);
            this.body.CreateFixture(this.fixDef);
            position = this.body.GetPosition();
            // Creates a new Shape object
            this.view = new createjs.Shape();
            this.view.regX = this.width * 0.5 * config.SCALE;
            this.view.regY = this.height * 0.5 * config.SCALE;
            this.view.graphics.beginFill("#663300").drawRect(position.x * config.SCALE, position.y * config.SCALE, this.width * config.SCALE, this.height * config.SCALE);
        };
        return Platform;
    })();
    objects.Platform = Platform;
})(objects || (objects = {}));
//# sourceMappingURL=platform.js.map