import prime from './primes.json' assert {type: 'json'};

const Application = PIXI.Application

const app = new Application({ 
  width: 3000, 
  height: 3000,       
  backgroundColor: 0x333334,                
  antialias: true,
  resolution: 1
}
);

document.body.appendChild(app.view);

function createDot(distance) {
    let inicialPoint = {
        x: 96000,
        y: 96000
    }

    let x = (distance * Math.sin(distance))
    let y = (distance * Math.cos(distance))

    let dot = new PIXI.Graphics();
    dot.position.set((inicialPoint.x + x) / 64, (inicialPoint.y + y) / 64)
    dot.beginFill(0xFFD000);
    dot.drawCircle(1, 1, 1);
    dot.endFill();

    app.stage.addChild(dot)
}

for (let i=0; i < 9592; i++) {
    createDot(prime[i])
}