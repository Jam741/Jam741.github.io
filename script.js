console.clear()

var gui = new dat.GUI();
var settings = {
    type: "圆形",
    totalPoints: 500,
    factor: 0.5,
    radius: 800,
    animate: false,
    speed: 0.01,
    number: 1,
    midu:1,
    // fillColor: '#FFFFFF',
    bgColor: '#000000',
    content: 'SOBEY',
    contentColor: '#FFFFFF',
    contentSize: 6,
    contentSizeMax: 24,
    rotateOpen: false,

    // f2_fillColor : [ 0, 128, 255, 0.3 ],
    f2_type: '矩形',
    f2_bgColor: '#000000',
    f2_width: 800,
    f2_height: 800,
    f2_content: "SOBEY",
    f2_contentColor: '#FFFFFF',
    f2_contentSize: 6,
    f2_contentSizeMax: 24,
    f2_rotateOpen: false,
    f2_factor: 0.5,
    f2_midu: 1,

    f3_type: '线',
    f3_bgColor: '#000000',
    f3_width: 200,
    f3_height: 800,
    f3_content: "SOBEY",
    f3_contentColor: '#FFFFFF',
    f3_contentSize: 6,
    f3_contentSizeMax: 24,
    f3_rotateOpen: false,
    f3_factor: 0.5,
    f3_midu: 1,

    f4_type: '箭头',
    f4_bgColor: '#000000',
    f4_width: 800,
    f4_content: "SOBEY",
    f4_contentColor: '#FFFFFF',
    f4_contentSize: 6,
    f4_contentSizeMax: 24,
    f4_rotateOpen: false,
    f4_factor: 0.5,
    f4_midu: 1,

    f5_type: '菱形',
    f5_bgColor: '#000000',
    f5_radius: 800,
    f5_content: "SOBEY",
    f5_contentColor: '#FFFFFF',
    f5_contentSize: 6,
    f5_contentSizeMax: 24,
    f5_rotateOpen: false,
    f5_factor: 0.5,
    f5_midu: 1,

}

let circlePrint, rectanglePint, linePint, arrowPint, diamondPint;

let font;
let c;

function preload() {
    font = loadFont('HelveticaNeueLTPro-Lt.otf')
}

function keyPressed() {
    if (keyCode === ENTER) {
        // console.log('按下了Enter键');
        saveAsCanvas();
        // alert('按下了Enter键')
    }
}

function saveAsCanvas() {
    save("output_canvas.png");
    // saveCanvas(c, 'myCanvas', 'jpg');
}

function setup() {

    c = createCanvas(innerWidth, innerHeight);

    circlePrint = new CirclePint();
    circlePrint.readly();

    rectanglePint = new RectanglePint();
    rectanglePint.readly();

    linePint = new LinePint();
    linePint.readly();

    arrowPint = new ArrowPint();
    arrowPint.readly();

    diamondPint = new DiamondPint();
    diamondPint.readly();
}

function draw() {
    switch (settings.type) {
        case "圆形":
            f1.open();
            f2.close();
            f3.close();
            f4.close();
            f5.close();
            circlePrint.update(settings.radius, settings.bgColor, settings.content, settings.contentColor, settings.contentSize, settings.contentSizeMax, settings.factor)
            circlePrint.display();
            break;
        case "矩形":
            f1.close();
            f2.open();
            f3.close();
            f4.close();
            f5.close();
            rectanglePint.update();
            rectanglePint.display();
            break;
        case "线":
            f1.close();
            f2.close();
            f3.open();
            f4.close();
            f5.close();
            linePint.update();
            linePint.display();
            break;
        case "箭头":
            f1.close();
            f2.close();
            f3.close();
            f4.open();
            f5.close();
            arrowPint.update();
            arrowPint.display();
            break;
        case "菱形":
            f1.close();
            f2.close();
            f3.close();
            f4.close();
            f5.open();
            diamondPint.update();
            diamondPint.display();
            break;
    }

}


addEventListener('resize', () => {
    resizeCanvas(innerWidth, innerHeight)
});

gui.add(settings, "type", ["圆形", "矩形", "线", "箭头", "菱形"]).name("形状")
let f1 = gui.addFolder("圆形参数");
f1.add(settings, 'radius', 600, 1000).name("半径");
f1.addColor(settings, 'bgColor').name("背景色");
f1.add(settings, "content").name("文本")
f1.addColor(settings, "contentColor").name("文本颜色")
f1.add(settings, "contentSize", 2, 14).step(1).name("最小子体")
f1.add(settings, "contentSizeMax", 16, 80).step(1).name("最大字体")
f1.add(settings, "factor", 0.1, 1).step(0.1).name("强度")
f1.add(settings, "midu", 1, 100).step(1).name("密度")
f1.add(settings, "rotateOpen", true).name("向心角度")
f1.open();

let f2 = gui.addFolder("矩形参数");
f2.addColor(settings, "f2_bgColor").name("背景色")
f2.add(settings, "f2_width", 100, innerWidth).step(10).name("尺寸")
// f2.add(settings, "f2_height", 100, innerHeight).step(10).name("高度")
f2.add(settings, "f2_content").name("文本")
f2.addColor(settings, "f2_contentColor").name("文本颜色")
f2.add(settings, "f2_contentSize", 1, 80).step(1).name("最小子体")
f2.add(settings, "f2_contentSizeMax", 16, 80).step(1).name("最大字体")
f2.add(settings, "f2_factor", 0.1, 1).step(0.1).name("强度")
f2.add(settings, "f2_midu", 1, 100).step(1).name("密度")
f2.add(settings, "f2_rotateOpen", true).name("向心角度")

// f2.open()

let f3 = gui.addFolder("线参数")
f3.addColor(settings, "f3_bgColor").name("背景色")
f3.add(settings, "f3_width", 10, innerWidth / 5).step(10).name("尺寸")
// f3.add(settings, "f3_height", 100, innerHeight).step(10).name("高度")
f3.add(settings, "f3_content").name("文本")
f3.addColor(settings, "f3_contentColor").name("文本颜色")
f3.add(settings, "f3_contentSize", 1, 80).step(1).name("最小子体")
f3.add(settings, "f3_contentSizeMax", 16, 80).step(1).name("最大字体")
f3.add(settings, "f3_factor", 0.1, 1).step(0.1).name("强度")
f3.add(settings, "f3_midu", 1, 100).step(1).name("密度")
f3.add(settings, "f3_rotateOpen", true).name("向心角度")

let f4 = gui.addFolder("箭头")
f4.addColor(settings, "f4_bgColor").name("背景色")
f4.add(settings, "f4_width", 100, innerHeight).step(10).name("尺寸")
f4.add(settings, "f4_content").name("文本")
f4.addColor(settings, "f4_contentColor").name("文本颜色")
f4.add(settings, "f4_contentSize", 1, 80).step(1).name("最小子体")
f4.add(settings, "f4_contentSizeMax", 16, 80).step(1).name("最大字体")
f4.add(settings, "f4_factor", 0.1, 1).step(0.1).name("强度")
f4.add(settings, "f4_midu", 1, 100).step(1).name("密度")
f4.add(settings, "f4_rotateOpen", true).name("向心角度")

let f5 = gui.addFolder("菱形")
f5.addColor(settings, "f4_bgColor").name("背景色")
f5.add(settings, 'f5_radius', 600, innerHeight).name("半径");
f5.add(settings, "f5_content").name("文本")
f5.addColor(settings, "f5_contentColor").name("文本颜色")
f5.add(settings, "f5_contentSize", 1, 80).step(1).name("最小子体")
f5.add(settings, "f5_contentSizeMax", 16, 80).step(1).name("最大字体")
f5.add(settings, "f5_factor", 0.1, 1).step(0.1).name("强度")
f5.add(settings, "f5_midu", 1, 100).step(1).name("密度")
f5.add(settings, "f5_rotateOpen", true).name("向心角度")



function DiamondPint() {

    this.x = innerWidth / 2;
    this.y = innerHeight / 2;
    this.radius = settings.f5_radius;
    this.bgColor = settings.f5_bgColor;
    this.content = settings.f5_content;
    this.contentColor = '#FFF';
    this.contentSize = 6;
    this.contentSizeMax = 24;
    this.n = 0.5;
    this.midu = settings.f5_midu;
    this.charIndex = 0;
    let maxDistance = 0;
    let isInner = false;


    this.readly = function () {
        maxDistance = dist(0, 0, width, height);
        print("maxDistance :" + maxDistance);

    }

    this.update = function () {
        this.radius = settings.f5_radius;
        this.bgColor = settings.f5_bgColor;
        this.content = settings.f5_content;
        this.contentColor = settings.f5_contentColor;
        this.contentSize = settings.f5_contentSize;
        this.contentSizeMax = settings.f5_contentSizeMax;
        this.rotateOpen = settings.f5_rotateOpen;
        this.n = settings.f5_factor;
        this.midu = settings.f5_midu;
    }

    this.display = function () {
        background(this.bgColor);
        noStroke();

        let d = dist(this.x, this.y, mouseX, mouseY);
        isInner = d < this.radius / 2;

        translate(this.x, this.y);

        var realMouseX = mouseX - (innerWidth / 2);
        var realMouseY = mouseY - (innerHeight / 2);

        var pyl = this.radius / 25;
        var center1X = -(this.radius / 2) - pyl;
        var center1Y = -(this.radius / 2) - pyl;
        var center2X = (this.radius / 2) + pyl;
        var center2Y = -(this.radius / 2) - pyl;
        var center3X = -(this.radius / 2) - pyl;
        var center3Y = (this.radius / 2) + pyl;
        var center4X = (this.radius / 2) + pyl;
        var center4Y = (this.radius / 2) + pyl;

        var r = (this.radius / 2);

        var mjuli1 = dist(realMouseX, realMouseY, center1X, center1Y);
        var mjuli2 = dist(realMouseX, realMouseY, center2X, center2Y);
        var mjuli3 = dist(realMouseX, realMouseY, center3X, center3Y);
        var mjuli4 = dist(realMouseX, realMouseY, center4X, center4Y);
        if (mjuli1 < r || mjuli2 < r || mjuli3 < r || mjuli4 < r) {
            isInner = false;
        }

        if (isInner) {

            for (let i = -(this.radius / 2) - this.contentSizeMax; i < (this.radius / 2); i += this.contentSizeMax + this.midu) {
                this.charIndex = 0;
                for (let j = -(this.radius / 2) - this.contentSizeMax; j < (this.radius / 2); j += this.contentSizeMax + this.midu) {
                    let d = dist(0, 0, j, i);

                    var juli1 = dist(j, i, center1X, center1Y);
                    var juli2 = dist(j, i, center2X, center2Y);
                    var juli3 = dist(j, i, center3X, center3Y);
                    var juli4 = dist(j, i, center4X, center4Y);

                    if (d < this.radius / 2 && juli1 > r && juli2 > r && juli3 > r && juli4 > r) {

                        //总长度
                        var totalL = dist(0, 0, realMouseX, realMouseY) + (this.radius / 2);

                        //变化差值
                        var totalChangeSize = this.contentSizeMax - this.contentSize;

                        var juli = dist(realMouseX, realMouseY, j, i);

                        var maxQSiz = 0;
                        if (juli < totalL * this.n) {

                            var qTotal = totalL * this.n;
                            var bh = juli / qTotal * totalChangeSize / 2
                            var size = this.contentSize + bh;
                            if (size > maxQSiz) maxQSiz = size;
                            if (this.rotateOpen) {
                                var angle = atan2(realMouseY - i, realMouseX - j);
                                displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            } else {
                                displayText(this.getZM(), this.contentColor, size, j, i);
                            }
                        } else {
                            var hTotal = totalL * (1 - this.n);
                            var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                            var size = this.contentSize + bh;
                            if (this.rotateOpen) {
                                var angle = atan2(realMouseY - i, realMouseX - j);
                                displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            } else {
                                displayText(this.getZM(), this.contentColor, size, j, i);
                            }
                        }
                    }
                }
            }

        } else {
            var l = dist(0, 0, realMouseX, realMouseY);
            var x1 = realMouseX * (this.radius / 4) / l;
            var y1 = realMouseY * (this.radius / 4) / l;
            var x2 = realMouseX * (this.radius / 2) / l;
            var y2 = realMouseY * (this.radius / 2) / l;

            var minX = 0;
            var minY = 0;

            minX = x2 * (l - (this.radius / 2)) / l;

            minY = y2 * (l - (this.radius / 2)) / l;

            fill(255);
            for (let i = -(this.radius / 2) - this.contentSizeMax; i < (this.radius / 2); i += this.contentSizeMax + this.midu) {
                this.charIndex = 0;
                for (let j = -(this.radius / 2) - this.contentSizeMax; j < (this.radius / 2); j += this.contentSizeMax + this.midu) {
                    let d = dist(0, 0, j, i);

                    var juli1 = dist(j, i, center1X, center1Y);
                    var juli2 = dist(j, i, center2X, center2Y);
                    var juli3 = dist(j, i, center3X, center3Y);
                    var juli4 = dist(j, i, center4X, center4Y);

                    if (d < this.radius / 2 && juli1 > r && juli2 > r && juli3 > r && juli4 > r) {


                        //总长度
                        var totalL = dist(minX, minY, 0, 0) + (this.radius / 2);

                        //变化差值
                        var totalChangeSize = this.contentSizeMax - this.contentSize;

                        var juli = dist(minX, minY, j, i);

                        var maxQSiz = 0;
                        if (juli < totalL * this.n) {

                            var qTotal = totalL * this.n;
                            var bh = juli / qTotal * totalChangeSize / 2
                            var size = this.contentSizeMax - bh;
                            if (size > maxQSiz) maxQSiz = size;
                            if (this.rotateOpen) {
                                var angle = atan2(realMouseY - i, realMouseX - j);
                                displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            } else {
                                displayText(this.getZM(), this.contentColor, size, j, i);
                            }
                        } else {
                            var hTotal = totalL * (1 - this.n);
                            var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                            var size = this.contentSizeMax - bh;
                            if (this.rotateOpen) {
                                var angle = atan2(realMouseY - i, realMouseX - j);
                                displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            } else {
                                displayText(this.getZM(), this.contentColor, size, j, i);
                            }
                        }
                    }
                }
            }

        }
    }

    this.getZM = function () {
        var i = this.charIndex % this.content.length
        this.charIndex++;
        return this.content.charAt(i);
    }
}


function ArrowPint() {

    this.mWidth = settings.f4_width;
    this.mHeight = settings.f4_width;
    this.bgColor = settings.f4_bgColor;
    this.content = settings.f4_content;
    this.contentColor = settings.f4_contentColor;
    this.contentSize = settings.f4_contentSize;
    this.contentSizeMax = settings.f4_contentSizeMax;
    this.n = settings.f4_factor;
    this.rotateOpen = settings.f4_rotateOpen;
    this.charIndex = 0;
    this.midu = settings.f4_midu;
    let maxDistance = 0;

    this.readly = function () {
        maxDistance = dist(0, 0, width, height);
        print("maxDistance :" + maxDistance);
    }

    this.update = function () {
        this.mWidth = settings.f4_width;
        this.mHeight = settings.f4_width;
        this.bgColor = settings.f4_bgColor;
        this.content = settings.f4_content;
        this.contentColor = settings.f4_contentColor;
        this.contentSize = settings.f4_contentSize;
        this.contentSizeMax = settings.f4_contentSizeMax;
        this.rotateOpen = settings.f4_rotateOpen;
        this.n = settings.f4_factor;
        this.midu = settings.f4_midu;
    }


//     arc(x, y, w, h, start, stop, mode)
//     参数：此函数接受上述和以下所述的七个参数：
//
//
// x: 此参数用于保存椭圆弧的x坐标值。
// y: 此参数用于保存椭圆弧的y坐标值。
// w: 此参数采用椭圆弧的宽度值。
// h: 此参数采用椭圆弧的高度值。
// start: 该参数采用弧度开始的角度值，以弧度指定。
// stop: 该参数采用弧度停止的角度值，以弧度指定。
// mode: 这是一个可选参数，它决定绘制弧的方式为CHORD，PIE或OPEN

    this.display = function () {
        background(this.bgColor);
        noStroke();


        let x = innerWidth / 2;
        let y = innerHeight / 2;
        // rectMode(CENTER);
        // noStroke();
        // rect(x,y,this.mWidth,this.mHeight);
        // noStroke();
        // fill(this.bgColor);
        let center1x = x - this.mWidth / 2;
        let center1y = y - this.mHeight / 2;
        // arc(center1x,center1y,this.mWidth,this.mHeight,0,0.6 * PI, PIE)
        // fill(this.contentColor);

        // fill(this.bgColor);
        let center2x = x + this.mWidth / 2;
        let center2y = y - this.mHeight / 2;
        // arc(center2x,center2y,this.mWidth,this.mHeight,0.4*PI,PI, PIE)
        // fill(this.contentColor);

        // fill('red');
        let center3x = x - this.mWidth / 2;
        let center3y = y;
        // arc(center3x,center3y,this.mWidth,this.mHeight,0, 0.5 * PI, PIE)
        // fill(this.contentColor);


        // fill('red');
        let center4x = x + this.mWidth / 2;
        let center4y = y;
        // arc(center4x,center4y,this.mWidth,this.mHeight,0.5 * PI, 1 * PI, PIE)
        // fill(this.contentColor);

        // fill(this.contentColor)
        // let x = innerWidth / 2 - this.mWidth / 2;
        // let y = innerHeight / 2 - this.mHeight / 2;
        // // rect(x,y,this.mWidth,this.mHeight);
        //

        var mjuli1 = dist(center1x, center1y, mouseX, mouseY);
        var mjuli2 = dist(center2x, center2y, mouseX, mouseY);
        var mjuli3 = dist(center3x, center3y, mouseX, mouseY);
        var mjuli4 = dist(center4x, center4y, mouseX, mouseY);
        var isInner = false;
        if (mouseY < y) {
            if (mjuli1 >= this.mWidth / 2 && mjuli2 >= this.mWidth / 2) {
                isInner = true;
            } else {
                isInner = false;
            }
        } else {
            if (mjuli3 <= (this.mWidth / 2) || mjuli4 <= (this.mWidth / 2)) {
                isInner = true;
            } else {
                isInner = false;
            }
        }
        if (mouseX < center1x || mouseX > center2x) {
            isInner = false;
        }


        print("isInner : " + isInner);
        if (isInner) {
            for (let i = y - this.mHeight / 2; i <= y + this.mHeight / 2; i += (this.contentSizeMax) + this.midu) {
                this.charIndex = 0;
                for (let k = x - this.mWidth / 2; k <= x + this.mWidth / 2; k += (this.contentSizeMax)+ this.midu) {
                    // let d = dist(this.x, this.y, k, i)
                    // if (d < this.radius / 2 + 5) {
                    // let size = dist(mouseX, mouseY, k, i);
                    // size = (size / maxDistance) * 40;
                    // print("size :" + size);
                    // if (k != x) {
                    //(k,i)
                    juli1 = dist(center1x, center1y, k, i);
                    juli2 = dist(center2x, center2y, k, i);
                    juli3 = dist(center3x, center3y, k, i);
                    juli4 = dist(center4x, center4y, k, i);


                    if (i < y) {
                        if (juli1 >= this.mWidth / 2 && juli2 >= this.mWidth / 2) {
                            //总长度
                            var totalL = dist(mouseX, 0, x, 0) + (this.mWidth / 2)
                            //变化差值
                            var totalChangeSize = this.contentSizeMax - this.contentSize;

                            var juli = dist(k, 0, mouseX, 0);

                            if (juli < totalL * this.n) {

                                var qTotal = totalL * this.n;
                                var bh = juli / qTotal * totalChangeSize / 2
                                var size = this.contentSize + bh;
                                if (this.rotateOpen) {
                                    var angle = atan2(mouseY - i, mouseX - k);
                                    displayTextRotate(this.getZM(), this.contentColor, size, k, i, angle);
                                } else {
                                    displayText(this.getZM(), this.contentColor, size, k, i);
                                }
                            } else {
                                var hTotal = totalL * (1 - this.n);
                                var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                                var size = this.contentSize + bh;
                                if (this.rotateOpen) {
                                    var angle = atan2(mouseY - i, mouseX - k);
                                    displayTextRotate(this.getZM(), this.contentColor, size, k, i, angle);
                                } else {
                                    displayText(this.getZM(), this.contentColor, size, k, i);
                                }
                            }

                        }
                    } else {

                        if (juli3 <= (this.mWidth / 2) || juli4 <= (this.mWidth / 2)) {
                            //总长度
                            var totalL = dist(mouseX, 0, x, 0) + (this.mWidth / 2)
                            //变化差值
                            var totalChangeSize = this.contentSizeMax - this.contentSize;

                            var juli = dist(k, 0, mouseX, 0);

                            if (juli < totalL * this.n) {

                                var qTotal = totalL * this.n;
                                var bh = juli / qTotal * totalChangeSize / 2
                                var size = this.contentSize + bh;
                                if (this.rotateOpen) {
                                    var angle = atan2(mouseY - i, mouseX - k);
                                    displayTextRotate(this.getZM(), this.contentColor, size, k, i, angle);
                                } else {
                                    displayText(this.getZM(), this.contentColor, size, k, i);
                                }
                            } else {
                                var hTotal = totalL * (1 - this.n);
                                var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                                var size = this.contentSize + bh;
                                if (this.rotateOpen) {
                                    var angle = atan2(mouseY - i, mouseX - k);
                                    displayTextRotate(this.getZM(), this.contentColor, size, k, i, angle);
                                } else {
                                    displayText(this.getZM(), this.contentColor, size, k, i);
                                }
                            }

                        }

                    }
                }

            }

        } else {
            for (let i = y - this.mHeight / 2; i <= y + this.mHeight / 2; i += (this.contentSizeMax)+ this.midu) {
                this.charIndex = 0;
                for (let k = x - this.mWidth / 2; k <= x + this.mWidth / 2; k += (this.contentSizeMax)+ this.midu) {
                    // let d = dist(this.x, this.y, k, i)
                    // if (d < this.radius / 2 + 5) {
                    // let size = dist(mouseX, mouseY, k, i);
                    // size = (size / maxDistance) * 40;
                    // print("size :" + size);
                    // if (k != x) {
                    //(k,i)
                    juli1 = dist(center1x, center1y, k, i);
                    juli2 = dist(center2x, center2y, k, i);
                    juli3 = dist(center3x, center3y, k, i);
                    juli4 = dist(center4x, center4y, k, i);


                    if (i < y) {
                        if (juli1 >= this.mWidth / 2 && juli2 >= this.mWidth / 2) {
                            //变化差值
                            var totalChangeSize = this.contentSizeMax - this.contentSize;

                            var l = dist(mouseX, 0, x, 0);

                            var bl = (l - (this.mWidth / 2)) / l;


                            if (mouseX < center1x) {
                                var dx = x - this.mWidth / 2 * bl;
                            } else if (mouseX >= this.mWidth / 2) {
                                var dx = x + this.mWidth / 2 * bl;
                            } else {
                                dx = x;
                            }

                            //总长度
                            var totalL = dist(dx, 0, x, 0) + (this.mWidth / 2)
                            var juli = dist(k, 0, dx, 0);

                            if (juli < totalL * this.n) {

                                var qTotal = totalL * this.n;
                                var bh = juli / qTotal * totalChangeSize / 2
                                var size = this.contentSizeMax - bh;
                                if (this.rotateOpen) {
                                    var angle = atan2(mouseY - i, mouseX - k);
                                    displayTextRotate(this.getZM(), this.contentColor, size, k, i, angle);
                                } else {
                                    displayText(this.getZM(), this.contentColor, size, k, i);
                                }
                            } else {
                                var hTotal = totalL * (1 - this.n);
                                var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                                var size = this.contentSizeMax - bh;
                                if (this.rotateOpen) {
                                    var angle = atan2(mouseY - i, mouseX - k);
                                    displayTextRotate(this.getZM(), this.contentColor, size, k, i, angle);
                                } else {
                                    displayText(this.getZM(), this.contentColor, size, k, i);
                                }
                            }

                        }
                    } else {

                        if (juli3 <= (this.mWidth / 2) || juli4 <= (this.mWidth / 2)) {
                            //变化差值
                            var totalChangeSize = this.contentSizeMax - this.contentSize;

                            var l = dist(mouseX, 0, x, 0);

                            var bl = (l - (this.mWidth / 2)) / l;


                            if (mouseX < center1x) {
                                var dx = x - this.mWidth / 2 * bl;
                            } else if (mouseX >= this.mWidth / 2) {
                                var dx = x + this.mWidth / 2 * bl;
                            } else {
                                dx = x;
                            }

                            //总长度
                            var totalL = dist(dx, 0, x, 0) + (this.mWidth / 2)
                            var juli = dist(k, 0, dx, 0);

                            if (juli < totalL * this.n) {

                                var qTotal = totalL * this.n;
                                var bh = juli / qTotal * totalChangeSize / 2
                                var size = this.contentSizeMax - bh;
                                if (this.rotateOpen) {
                                    var angle = atan2(mouseY - i, mouseX - k);
                                    displayTextRotate(this.getZM(), this.contentColor, size, k, i, angle);
                                } else {
                                    displayText(this.getZM(), this.contentColor, size, k, i);
                                }
                            } else {
                                var hTotal = totalL * (1 - this.n);
                                var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                                var size = this.contentSizeMax - bh;
                                if (this.rotateOpen) {
                                    var angle = atan2(mouseY - i, mouseX - k);
                                    displayTextRotate(this.getZM(), this.contentColor, size, k, i, angle);
                                } else {
                                    displayText(this.getZM(), this.contentColor, size, k, i);
                                }
                            }


                        }

                    }
                }

            }
        }
    }


    this.getZM = function () {
        var i = this.charIndex % this.content.length
        this.charIndex++;
        return this.content.charAt(i);
    }
}


function LinePint() {

    this.mWidth = settings.f3_width;
    this.mHeight = settings.f3_width * 3;
    this.bgColor = settings.f3_bgColor;
    this.content = settings.f3_content;
    this.contentColor = settings.f3_contentColor;
    this.contentSize = settings.f3_contentSize;
    this.contentSizeMax = settings.f3_contentSizeMax;
    this.rotateOpen = settings.f3_rotateOpen;
    this.n = settings.f3_factor;
    this.charIndex = 0;
    this.midu = settings.f3_midu;
    let maxDistance = 0;

    this.readly = function () {
        maxDistance = dist(0, 0, width, height);
    }

    this.update = function () {
        this.mWidth = settings.f3_width;
        this.mHeight = settings.f3_width * 3;
        this.bgColor = settings.f3_bgColor;
        this.content = settings.f3_content;
        this.contentColor = settings.f3_contentColor;
        this.contentSize = settings.f3_contentSize;
        this.contentSizeMax = settings.f3_contentSizeMax;
        this.rotateOpen = settings.f3_rotateOpen;
        this.n = settings.f3_factor;
        this.midu = settings.f3_midu;
    }


    this.display = function () {
        background(this.bgColor);
        noStroke();
        fill(this.contentColor)

        var realMouseX = mouseX - (innerWidth / 2);
        var realMouseY = mouseY - (innerHeight / 2);
        // rect(x,y,this.mWidth,this.mHeight);

        translate(innerWidth / 2, innerHeight / 2);


        var pyl = this.mWidth + (this.mWidth / 3);

        var isInnerx = -(this.mWidth / 2) < realMouseX && realMouseX < this.mWidth / 2 && -(this.mHeight / 2) < realMouseY && realMouseY < this.mHeight / 2;
        print(isInnerx);
        if (isInnerx) {
            for (let i = -this.mHeight / 2 + this.contentSizeMax; i < this.mHeight / 2; i += this.contentSizeMax + this.midu) {
                this.charIndex = 0;
                for (let j = -this.mWidth / 2 + this.contentSizeMax; j < this.mWidth / 2; j += this.contentSizeMax + this.midu) {
                    //总长度
                    var totalL = Math.abs(realMouseX) + (this.mWidth / 2);
                    //变化差值
                    var totalChangeSize = this.contentSizeMax - this.contentSize;

                    var juli = Math.abs(realMouseX - j);

                    if (juli < totalL * this.n) {

                        var qTotal = totalL * this.n;
                        var bh = juli / qTotal * totalChangeSize / 2
                        var size = this.contentSize + bh;
                        if (this.rotateOpen) {
                            var angle = atan2(realMouseY - i, realMouseX - j);
                            displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            displayTextRotate(this.getZM(), this.contentColor, size, j - pyl, i, angle);
                            displayTextRotate(this.getZM(), this.contentColor, size, j + pyl, i, angle);
                        } else {
                            displayText(this.getZM(), this.contentColor, size, j, i);
                            displayText(this.getZM(), this.contentColor, size, j-pyl, i);
                            displayText(this.getZM(), this.contentColor, size, j+pyl, i);
                        }
                    } else {
                        var hTotal = totalL * (1 - this.n);
                        var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                        var size = this.contentSize + bh;
                        if (this.rotateOpen) {
                            var angle = atan2(realMouseY - i, realMouseX - j);
                            displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            displayTextRotate(this.getZM(), this.contentColor, size, j - pyl, i, angle);
                            displayTextRotate(this.getZM(), this.contentColor, size, j + pyl, i, angle);
                        } else {
                            displayText(this.getZM(), this.contentColor, size, j, i);
                            displayText(this.getZM(), this.contentColor, size, j-pyl, i);
                            displayText(this.getZM(), this.contentColor, size, j+pyl, i);

                        }
                    }

                }
            }
        } else {
            for (let i = -this.mHeight / 2 + this.contentSizeMax; i < this.mHeight / 2; i += this.contentSizeMax + this.midu) {
                this.charIndex = 0;
                for (let j = -this.mWidth / 2 + this.contentSizeMax; j < this.mWidth / 2; j += this.contentSizeMax + this.midu) {
                    //总长度
                    var totalL = Math.abs(realMouseX) + (this.mWidth / 2);
                    //变化差值
                    var totalChangeSize = this.contentSizeMax - this.contentSize;

                    var l = Math.abs(realMouseX);

                    var bl = l == 0 ? 0.1 : (l - (this.mWidth / 2)) / l;

                    var dx
                    if (realMouseX < -this.mWidth / 2) {
                         dx = -this.mWidth / 2 * bl;
                    } else if (realMouseX >= this.mWidth / 2) {
                         dx = this.mWidth / 2 * bl;
                    }else{
                        dx = Math.abs(realMouseX - j);
                    }

                    totalL = Math.abs(dx) + (this.mWidth / 2)

                    var juli = 0;
                    // if(realMouseX < - this.mWidth / 2){
                    //     juli = Math.abs(-dx - j);
                    //     print(juli);
                    // }else if(realMouseX >= this.mWidth / 2){
                    //     juli = Math.abs(dx - j);
                    //     print(juli);
                    // }

                    juli = Math.abs(dx - j);

                    if (juli < totalL * this.n) {

                        var qTotal = totalL * this.n;
                        var bh = juli / qTotal * totalChangeSize / 2
                        var size = this.contentSizeMax - bh;
                        if (this.rotateOpen) {
                            var angle = atan2(realMouseY - i, realMouseX - j);
                            displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            displayTextRotate(this.getZM(), this.contentColor, size, j-pyl, i, angle);
                            displayTextRotate(this.getZM(), this.contentColor, size, j+pyl, i, angle);
                        } else {
                            displayText(this.getZM(), this.contentColor, size, j, i);
                            displayText(this.getZM(), this.contentColor, size, j-pyl, i);
                            displayText(this.getZM(), this.contentColor, size, j+pyl, i);
                        }
                    } else {
                        var hTotal = totalL * (1 - this.n);
                        var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                        var size = this.contentSizeMax - bh;
                        if (this.rotateOpen) {
                            var angle = atan2(realMouseY - i, realMouseX - j);
                            displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            displayTextRotate(this.getZM(), this.contentColor, size, j-pyl, i, angle);
                            displayTextRotate(this.getZM(), this.contentColor, size, j+pyl, i, angle);
                        } else {
                            displayText(this.getZM(), this.contentColor, size, j, i);
                            displayText(this.getZM(), this.contentColor, size, j-pyl, i);
                            displayText(this.getZM(), this.contentColor, size, j+pyl, i);
                        }
                    }
                }
            }
        }
    }

    this.getZM = function () {
        var i = this.charIndex % this.content.length
        this.charIndex++;
        return this.content.charAt(i);
    }
}

function RectanglePint() {

    this.mWidth = settings.f2_width;
    this.mHeight = settings.f2_width;
    this.bgColor = settings.f2_bgColor;
    this.content = settings.f2_content;
    this.contentColor = settings.f2_contentColor;
    this.contentSize = settings.f2_contentSize;
    this.contentSizeMax = settings.f2_contentSizeMax;
    this.rotateOpen = settings.f2_rotateOpen;
    this.n = settings.f2_factor;
    this.charIndex = 0;
    let maxDistance = 0;
    this.midu = settings.f2_midu;

    this.readly = function () {
        maxDistance = dist(0, 0, width, height);
        print("maxDistance :" + maxDistance);
    }

    this.update = function () {

        this.x = innerWidth / 2;
        this.y = innerHeight / 2;
        this.mWidth = settings.f2_width;
        this.mHeight = settings.f2_width;
        this.bgColor = settings.f2_bgColor;
        this.content = settings.f2_content;
        this.contentColor = settings.f2_contentColor;
        this.contentSize = settings.f2_contentSize;
        this.contentSizeMax = settings.f2_contentSizeMax;
        this.rotateOpen = settings.f2_rotateOpen;
        this.n = settings.f2_factor;
        this.midu = settings.f2_midu;
    }


    this.display = function () {
        background(this.bgColor);
        noStroke();
        fill(this.contentColor)

        var realMouseX = mouseX - (innerWidth / 2);
        var realMouseY = mouseY - (innerHeight / 2);

        var radius = dist(this.mWidth / 2, this.mHeight / 2, 0, 0);

        translate(this.x, this.y);

        var isInnerx = -(this.mWidth / 2) < realMouseX && realMouseX < this.mWidth / 2 && -(this.mHeight / 2) < realMouseY && realMouseY < this.mHeight / 2;
        if (isInnerx) {
            for (let i = -this.mHeight / 2 + this.contentSizeMax; i < this.mHeight / 2; i += this.contentSizeMax + this.midu) {
                this.charIndex = 0;
                for (let j = -this.mWidth / 2 + this.contentSizeMax; j < this.mWidth / 2; j += this.contentSizeMax + this.midu) {
                    //总长度
                    var totalL = dist(0, 0, realMouseX, realMouseY) + radius;
                    //变化差值
                    var totalChangeSize = this.contentSizeMax - this.contentSize;

                    var xD = 0;
                    var yD = 0;
                    var juli = 500;


                    if ((Math.abs(j - realMouseX) / Math.abs(i - realMouseY)) > this.mWidth / this.mHeight) {
                        // xD = j - realMouseX;
                        xD = j;
                        yD = (j - realMouseX) * this.mHeight / this.mWidth + realMouseY;


                        juli = dist(xD, yD, realMouseX, realMouseY);

                        //
                        // if (juli < totalL * this.n) {
                        //
                        //     var qTotal = totalL * this.n;
                        //     var bh = juli / qTotal * totalChangeSize / 2
                        //     var size = this.contentSize + bh;
                        //     displayText("X", this.contentColor, size, j, i);
                        //
                        // } else {
                        //     var hTotal = totalL * (1 - this.n);
                        //     var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                        //     var size = this.contentSize + bh;
                        //     displayText("X", '#00FF00', size, j, i);
                        // }
                    } else {
                        // yD = i - realMouseY;
                        yD = i;
                        xD = (i - realMouseY) * this.mWidth / this.mHeight + realMouseX;

                        juli = dist(xD, yD, realMouseX, realMouseY);

                        //
                        // if (juli < totalL * this.n) {
                        //
                        //     var qTotal = totalL * this.n;
                        //     var bh = juli / qTotal * totalChangeSize / 2
                        //     var size = this.contentSize + bh;
                        //     displayText("X", this.contentColor, size, j, i);
                        //
                        // } else {
                        //     var hTotal = totalL * (1 - this.n);
                        //     var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                        //     var size = this.contentSize + bh;
                        //     displayText("X", '#0000FF', size, j, i);
                        // }
                    }
                    if (juli < totalL * this.n) {

                        var qTotal = totalL * this.n;
                        var bh = juli / qTotal * totalChangeSize / 2
                        var size = this.contentSize + bh;
                        if (this.rotateOpen) {
                            var angle = atan2(realMouseY - i, realMouseX - j);
                            displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                        } else {
                            displayText(this.getZM(), this.contentColor, size, j, i);
                        }
                    } else {
                        var hTotal = totalL * (1 - this.n);
                        var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                        var size = this.contentSize + bh;
                        if (this.rotateOpen) {
                            var angle = atan2(realMouseY - i, realMouseX - j);
                            displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                        } else {
                            displayText(this.getZM(), this.contentColor, size, j, i);
                        }
                    }

                }
            }

        } else {


            var l = dist(0, 0, realMouseX, realMouseY);
            var x2 = realMouseX * (radius / 2) / l;
            var y2 = realMouseY * (radius / 2) / l;

            var minX = 0;
            var minY = 0;

            // minX = x2 * (l - (radius / 2)) / l;
            //
            // minY = y2 * (l - (radius / 2)) / l;

            for (let i = -this.mHeight / 2 + this.contentSizeMax; i < this.mHeight / 2; i += this.contentSizeMax + this.midu) {
                this.charIndex = 0;
                for (let j = -this.mWidth / 2 + this.contentSizeMax; j < this.mWidth / 2; j += this.contentSizeMax + this.midu) {

                    //鼠标到正方形中心到距离
                    var mJuli = dist(realMouseX, realMouseY, 0, 0);

                    //

                    var w = this.mHeight / 2;

                    print(w);

                    var x0 = 0;
                    var y0 = 0;


                    var xD = 0;
                    var yD = 0;

                    var  juli = 0;

                    if (Math.abs(realMouseX) > Math.abs(realMouseY)) {
                        var xbiy = Math.abs(realMouseY / realMouseX);
                        var bili = (Math.abs(realMouseX) - (w / 2)) / Math.abs(realMouseX);
                        var bili2 = bili;
                        if (realMouseX > 0) {
                            if (realMouseY > 0) {
                                x0 = bili2 * (w / 2);
                                y0 = bili2 * (w / 2) * xbiy;
                            } else {
                                x0 = bili2 * (w / 2);
                                y0 = -bili2 * (w / 2) * xbiy
                            }
                        } else {
                            if (realMouseY > 0) {
                                x0 = -bili2 * (w / 2);
                                y0 = bili2 * (w / 2) * xbiy;
                            } else {
                                x0 = -bili2 * (w / 2);
                                y0 = -bili2 * (w / 2) * xbiy;
                            }
                        }
                    } else {
                        var xbiy = Math.abs(realMouseX / realMouseY);
                        var bili = (Math.abs(realMouseY) - (w / 2)) / Math.abs(realMouseY);
                        var bili2 = bili;
                        if (realMouseY > 0) {
                            if (realMouseX > 0) {
                                y0 = bili2 * (w / 2);
                                x0 = bili2 * (w / 2) * xbiy;
                            } else {
                                y0 = bili2 * (w / 2);
                                x0 = -bili2 * (w / 2) * xbiy;
                            }
                        } else {
                            if (realMouseX > 0) {
                                y0 = -bili2 * (w / 2);
                                x0 = bili2 * (w / 2) * xbiy;
                            } else {
                                y0 = -bili2 * (w / 2);
                                x0 = -bili2 * (w / 2) * xbiy;
                            }

                        }
                    }

                    if ((Math.abs(j - x0) / Math.abs(i - y0)) > this.mWidth / this.mHeight) {
                        // xD = j - realMouseX;
                        xD = j;
                        yD = (j - x0) * this.mHeight / this.mWidth + y0;


                        juli = dist(xD, yD, x0, y0);

                    } else {
                        // yD = i - realMouseY;
                        yD = i;
                        xD = (i - y0) * this.mWidth / this.mHeight + x0;

                        juli = dist(xD, yD, x0, y0);

                    }
                    //总长度
                    var totalL = dist(0, 0, x0, y0) + radius;
                    //变化差值
                    var totalChangeSize = this.contentSizeMax - this.contentSize;
                    //
                    if (juli < totalL * this.n) {

                        var qTotal = totalL * this.n;
                        var bh = juli / qTotal * totalChangeSize / 2
                        var size = this.contentSize + bh;
                        if (this.rotateOpen) {
                            var angle = atan2(realMouseY - i, realMouseX - j);
                            displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                        } else {
                            displayText(this.getZM(), this.contentColor, size, j, i);
                        }
                    } else {
                        var hTotal = totalL * (1 - this.n);
                        var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                        var size = this.contentSize + bh;
                        if (this.rotateOpen) {
                            var angle = atan2(realMouseY - i, realMouseX - j);
                            displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                        } else {
                            displayText(this.getZM(), this.contentColor, size, j, i);
                        }
                    }
                }
            }

        }


    }

    this.getZM = function () {
        var i = this.charIndex % this.content.length
        this.charIndex++;
        return this.content.charAt(i);
    }
}


function CirclePint() {

    this.x = innerWidth / 2;
    this.y = innerHeight / 2;
    this.radius = settings.radius;
    this.bgColor = settings.bgColor;
    this.content = settings.content;
    this.midu = settings.midu;
    this.contentColor = '#FFF';
    this.contentSize = 12
    this.contentSizeMax = 12
    this.rotateOpen = settings.rotateOpen
    this.n = 1;
    this.charIndex = 0;
    let maxDistance = 0;
    let isInner = false;


    this.readly = function () {
        maxDistance = dist(0, 0, width, height);
        print("maxDistance :" + maxDistance);

    }

    this.update = function (radius, bgColor, content, contentColor, contentSize, contentSizeMax, n) {
        this.radius = radius;
        this.bgColor = bgColor;
        this.content = content;
        this.contentColor = contentColor;
        this.contentSize = contentSize;
        this.contentSizeMax = contentSizeMax;
        this.midu = settings.midu;
        this.rotateOpen = settings.rotateOpen
        this.n = n;
    }

    this.display = function () {
        background(this.bgColor);
        noStroke();

        let d = dist(this.x, this.y, mouseX, mouseY);
        isInner = d < this.radius / 2;

        translate(this.x, this.y);
        var realMouseX = mouseX - (innerWidth / 2);
        var realMouseY = mouseY - (innerHeight / 2);
        print("this.rotateOpen:" + this.rotateOpen);

        if (isInner) {

            for (let i = -(this.radius / 2) - this.contentSizeMax; i < (this.radius / 2); i += this.contentSizeMax + this.midu) {
                this.charIndex = 0;
                for (let j = -(this.radius / 2) - this.contentSizeMax; j < (this.radius / 2); j += this.contentSizeMax + this.midu) {
                    let d = dist(0, 0, j, i);
                    if (d < this.radius / 2) {

                        //总长度
                        var totalL = dist(0, 0, realMouseX, realMouseY) + (this.radius / 2);

                        //变化差值
                        var totalChangeSize = this.contentSizeMax - this.contentSize;

                        var juli = dist(realMouseX, realMouseY, j, i);

                        var maxQSiz = 0;
                        if (juli < totalL * this.n) {

                            var qTotal = totalL * this.n;
                            var bh = juli / qTotal * totalChangeSize / 2
                            var size = this.contentSize + bh;
                            if (size > maxQSiz) maxQSiz = size;
                            if (this.rotateOpen) {
                                var angle = atan2(realMouseY - i, realMouseX - j);
                                print("angle: " + angle);
                                displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            } else {
                                displayText(this.getZM(), this.contentColor, size, j, i);
                            }

                        } else {
                            var hTotal = totalL * (1 - this.n);
                            var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                            var size = this.contentSize + bh;
                            if (this.rotateOpen) {
                                var angle = atan2(realMouseY - i, realMouseX - j);
                                displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            } else {
                                displayText(this.getZM(), this.contentColor, size, j, i);
                            }
                        }
                    }
                }
            }

        } else {
            var l = dist(0, 0, realMouseX, realMouseY);
            var x1 = realMouseX * (this.radius / 4) / l;
            var y1 = realMouseY * (this.radius / 4) / l;
            var x2 = realMouseX * (this.radius / 2) / l;
            var y2 = realMouseY * (this.radius / 2) / l;

            var minX = 0;
            var minY = 0;

            minX = x2 * (l - (this.radius / 2)) / l;

            minY = y2 * (l - (this.radius / 2)) / l;

            fill(255);
            for (let i = -(this.radius / 2) - this.contentSizeMax; i < (this.radius / 2); i += this.contentSizeMax + this.midu) {
                this.charIndex = 0;
                for (let j = -(this.radius / 2) - this.contentSizeMax; j < (this.radius / 2); j += this.contentSizeMax + this.midu) {
                    let d = dist(0, 0, j, i);
                    if (d < this.radius / 2) {


                        //总长度
                        var totalL = dist(minX, minY, 0, 0) + (this.radius / 2);

                        //变化差值
                        var totalChangeSize = this.contentSizeMax - this.contentSize;

                        var juli = dist(minX, minY, j, i);

                        var maxQSiz = 0;
                        if (juli < totalL * this.n) {

                            var qTotal = totalL * this.n;
                            var bh = juli / qTotal * totalChangeSize / 2
                            var size = this.contentSizeMax - bh;
                            if (size > maxQSiz) maxQSiz = size;
                            if (this.rotateOpen) {
                                var angle = atan2(realMouseY - i, realMouseX - j);
                                displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            } else {
                                displayText(this.getZM(), this.contentColor, size, j, i);
                            }
                        } else {
                            var hTotal = totalL * (1 - this.n);
                            var bh = (juli - (totalL * this.n)) / hTotal * totalChangeSize / 2 + (0.5 * totalChangeSize)
                            var size = this.contentSizeMax - bh;
                            if (this.rotateOpen) {
                                var angle = atan2(realMouseY - i, realMouseX - j);
                                displayTextRotate(this.getZM(), this.contentColor, size, j, i, angle);
                            } else {
                                displayText(this.getZM(), this.contentColor, size, j, i);
                            }
                        }
                    }
                }
            }

        }
    }

    this.getZM = function () {
        var i = this.charIndex % this.content.length
        this.charIndex++;
        return this.content.charAt(i);
    }
}

function displayText(s, color, size, x, y) {
    fill(color);
    textFont(font);
    textSize(size);
    text(s, x, y);
}


function displayTextRotate(s, color, size, x, y, angle) {
    push();
    fill(color);
    textFont(font);
    textSize(size);
    translate(x, y);
    rotate(angle);
    text(s, 0, 0);
    pop();
}