class Boton{

	constructor(id_temp, x, y, col, img) {
    this.id = id_temp;
    this.estado = 0;
		this.x = x;
		this.y = y;
		this.w = 40;
		this.h = 35;
		this.c = color(255);
		this.colorTrack = col;
		this.imagen = img;
	}

	mostrarStep(step_temp){
		noStroke();
		fill(this.c);

    if(activo && step_temp == this.id){
     stroke(50);
     strokeWeight(3);
    }else{
    //  stroke(230);
    //  strokeWeight(1.5);
    }

		if(this.estado == 1){
			image(this.imagen,this.x,this.y,this.w,this.h);
			noFill();
			rect(this.x,this.y,this.w,this.h, 2);

		} else {
			rect(this.x,this.y,this.w,this.h, 2);
		}

	}

	cambiarEstado(keyTransporte){
		if(this.checarMouse() || keyTransporte){
      if(this.estado == 0){

					switch(this.colorTrack){
	        	case 0:

							this.c = color(50,0,255); //Boton activado
							break;
						case 1:

							this.c = color(26, 83, 255); //Boton activado
							break;
						case 2:

							this.c = color(71, 71, 255); //Boton activado
							break;
						case 3:

							this.c = color(128, 128, 255); //Boton activado
							break;
					}

        this.estado = 1;
      }else {
        this.c = color(255);
        this.estado = 0;
      }
		}
	}

  mostrarTransporte(){
    this.w = 100;
    this.h = 40;

		if(!activo){
    fill(this.c);
	}else{
		fill(color(255, 73, 68));
	}

    stroke(0);
    strokeWeight(2);
    rect(this.x,this.y,this.w,this.h, 5);

    if(!activo){
      noStroke();
      fill(10);
      triangle(this.x + 45, this.y + 32, this.x + 45, this.y + 7,this.x + 60, this.y + 19);
    }
  }

  activarTransporte(keyTransporte){
   if(this.checarMouse() || keyTransporte){
  		if(this.estado == 1){
			//	avanzarStep();

				activo = true;
        timer = setInterval(avanzarStep, tempo(knob4.knobValue));
  		 } else {
         activo = false;
         clearInterval(timer);
         step = 0;
  		 }
     }
  }//activarTransporte

    checarMouse() {
     var estadoMouse;
      if(mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h){
        estadoMouse = true;
      }else {
        estadoMouse = false;
      }
    return estadoMouse;
  }
	
}//Clase Boton
