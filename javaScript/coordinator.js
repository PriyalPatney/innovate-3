{

    class BoxCreator{
        constructor(el,opt){
            this.el = el;
            this.opt = opt;
            this.init();   
        }
        init(){
            if(this.opt === 'teachers'){
                this.data = JSON.parse(TeacherDetails);
            }
            if(this.opt === 'students'){
                this.data = JSON.parse(StudentDetails);
            }
            this.DataSize = Object.keys(this.data[0]).length;
            console.log(this.data[0][1].name);
            var self = this;
            for(var i = 1 ; i <= this.DataSize ; i++){
                let name = this.data[0][i].name;
                let dept = this.data[0][i].dept;
                let link = this.data[0][i].link;
                self.createBox(name,dept,link);
            }
        }
        createBox(name,dpt,link){
            const template = `<div class="image" style="background-image: url('${link}.jpg')"></div>
                                <div class="detail">
                                    <span class="name"> ${name}</span>
                                    <span class="dept"> ${dpt}</span>
                                </div>`;
            let box = document.createElement('box');
            box.innerHTML = template;
            box.className = 'box';
            this.el.appendChild(box);
        }
    }

    var foo = document.querySelector('.section-tech');
    new BoxCreator(foo,"teachers");
    var foo = document.querySelector('.section-stu');
    new BoxCreator(foo,"students");
}